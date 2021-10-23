package co.com.sofka.questions.usecases.likeFace;


import co.com.sofka.questions.model.LikeFaceDTO;
import co.com.sofka.questions.model.QuestionDTO;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

@FunctionalInterface
public interface SaveLikeState {
    Mono<QuestionDTO> apply(@Valid LikeFaceDTO likeFaceDTO);
}
