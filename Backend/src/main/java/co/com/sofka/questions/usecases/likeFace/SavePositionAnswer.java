package co.com.sofka.questions.usecases.likeFace;


import co.com.sofka.questions.collections.PositionAnswer;
import co.com.sofka.questions.model.QuestionDTO;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

@FunctionalInterface
public interface SavePositionAnswer {
    Mono<QuestionDTO> apply(@Valid PositionAnswer positionAnswer);
}
