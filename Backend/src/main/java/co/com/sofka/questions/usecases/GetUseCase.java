package co.com.sofka.questions.usecases;

import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.AnswerRepository;
import co.com.sofka.questions.reposioties.LikeFaceRepository;
import co.com.sofka.questions.reposioties.QuestionRepository;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;


import java.util.Arrays;
import java.util.Map;
import java.util.Objects;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@Validated
public class GetUseCase implements Function<String, Mono<QuestionDTO>> {
    Logger logger = LoggerFactory.getLogger(GetUseCase.class);
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final MapperUtils mapperUtils;
  private final LikeFaceRepository likeFaceRepository;

  public GetUseCase(MapperUtils mapperUtils, QuestionRepository questionRepository, AnswerRepository answerRepository , LikeFaceRepository likeFaceRepository) {
        this.questionRepository = questionRepository;
        this.answerRepository = answerRepository;
        this.mapperUtils = mapperUtils;
    this.likeFaceRepository = likeFaceRepository;
  }

    @Override
    public Mono<QuestionDTO> apply(String id) {
        Objects.requireNonNull(id, "Id is required");
        return questionRepository.findById(id)
                .map(mapperUtils.mapEntityToQuestion())
                .flatMap(mapQuestionAggregate())
                .flatMap(mapQuestionAggregateLikeFace())
                .flatMap(mapQuestionAggregateCalifications());

    }

    private Function<QuestionDTO, Mono<QuestionDTO>> mapQuestionAggregate() {
        return questionDTO ->
                Mono.just(questionDTO).zipWith(
                        answerRepository.findAllByQuestionId(questionDTO.getId())
                                .map(mapperUtils.mapEntityToAnswer())
//                                .map(a -> { })
                                .collectList(),
                        (question, answers) -> {
                            question.setAnswers(answers);
                            return question;
                        }
                );
    }
  private Function<QuestionDTO, Mono<QuestionDTO>> mapQuestionAggregateLikeFace() {
    return questionDTO ->

            Mono.just(questionDTO).zipWith(

                    likeFaceRepository.findAllByQuestionId(questionDTO.getId())
                            .map(mapperUtils.mapEntityToLikeFace())
                            .collectList(),
                    (question, likeFace) -> {

                      question.setLikesFace(likeFace);
                      return question;
                    }
            );
  }
  private Function<QuestionDTO, Mono<QuestionDTO>> mapQuestionAggregateCalifications() {
    return questionDTO ->


            Mono.just(questionDTO).zipWith( likeFaceRepository.findAllByQuestionId(questionDTO.getId()).collectList() , (question , likeFace) -> {
                      var calificationsNew = question.getCalification().entrySet().stream().map(data -> {
                        data.setValue( (int)likeFace.stream().filter( likeFaceTmp-> likeFaceTmp.getState() == data.getKey()).count());
                        return  data;
                      }).collect(Collectors.toMap(Map.Entry::getKey,Map.Entry::getValue));
              question.setCalification(calificationsNew);
              return  question;
            }

            );

  }

}
