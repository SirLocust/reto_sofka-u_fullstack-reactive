package co.com.sofka.questions.usecases.positionanswer;


import co.com.sofka.questions.collections.PositionAnswer;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.PositionAnswerRepository;
import co.com.sofka.questions.usecases.likeFace.SavePositionAnswer;
import co.com.sofka.questions.usecases.question.GetUseCase;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.util.Objects;

@Service
@Validated
public class AddPositionAnswerUseCase implements SavePositionAnswer {
    Logger logger = LoggerFactory.getLogger(AddPositionAnswerUseCase.class);


  private final PositionAnswerRepository positionAnswerRepository;
  private GetUseCase getUseCase;


  public AddPositionAnswerUseCase( PositionAnswerRepository positionAnswerRepository, GetUseCase getUseCase) {




    this.positionAnswerRepository = positionAnswerRepository;
    this.getUseCase = getUseCase;
  }

    public Mono<QuestionDTO> apply(PositionAnswer positionAnswer) {
        Objects.requireNonNull(positionAnswer.getQuestionId(), "Id of the answer is required");
        return  positionAnswerRepository.findFirstByQuestionIdAndUserId(positionAnswer.getQuestionId(), positionAnswer.getUserId()).map(data -> {

                  positionAnswer.setId(data.getId());
                return positionAnswerRepository.deleteById(positionAnswer.getId()).thenReturn(positionAnswer);
                }).flatMap(data -> save(positionAnswer))
                .switchIfEmpty( this.save(positionAnswer));
    }

    private Mono<QuestionDTO> save(PositionAnswer positionAnswer){
        return  Mono.just(positionAnswer).flatMap(position -> positionAnswerRepository.save(positionAnswer)
                .flatMap(data -> Mono.just(positionAnswer))).flatMap(this::useGetUseCase);
    }


  private Mono<? extends QuestionDTO> useGetUseCase(PositionAnswer data) {
    return getUseCase.apply(data.getQuestionId());
  }
}
