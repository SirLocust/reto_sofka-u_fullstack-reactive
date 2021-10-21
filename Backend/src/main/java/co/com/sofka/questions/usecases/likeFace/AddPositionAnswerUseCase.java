package co.com.sofka.questions.usecases.likeFace;


import co.com.sofka.questions.collections.PositionAnswer;
import co.com.sofka.questions.model.LikeFaceDTO;
import co.com.sofka.questions.reposioties.LikeFaceRepository;
import co.com.sofka.questions.reposioties.PositionAnswerRepository;
import co.com.sofka.questions.usecases.MapperUtils;
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

    private final MapperUtils mapperUtils;
  private final PositionAnswerRepository positionAnswerRepository;


  public AddPositionAnswerUseCase(MapperUtils mapperUtils,PositionAnswerRepository positionAnswerRepository) {


        this.mapperUtils = mapperUtils;


    this.positionAnswerRepository = positionAnswerRepository;
  }

    public Mono<PositionAnswer> apply(PositionAnswer positionAnswer) {
        Objects.requireNonNull(positionAnswer.getQuestionId(), "Id of the answer is required");
        return  positionAnswerRepository.findFirstByQuestionIdAndUserId(positionAnswer.getQuestionId(), positionAnswer.getUserId()).map(data -> {
                logger.info(String.valueOf(data.getValue()));
                  logger.info(String.valueOf(positionAnswer.getValue()));

                  positionAnswer.setId(data.getId());



//

                return positionAnswerRepository.deleteById(positionAnswer.getId()).thenReturn(positionAnswer);
                }).flatMap(data -> save(positionAnswer))
                .switchIfEmpty( this.save(positionAnswer)    );


//





    }

    private Mono<PositionAnswer> save(PositionAnswer positionAnswer){
        return  Mono.just(positionAnswer).flatMap(likeFaceTmp -> positionAnswerRepository.save(positionAnswer)
                .flatMap(data -> Mono.just(positionAnswer)));

    }



}
