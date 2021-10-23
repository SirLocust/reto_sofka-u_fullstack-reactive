package co.com.sofka.questions.usecases.question;

import co.com.sofka.questions.reposioties.AnswerRepository;

import co.com.sofka.questions.reposioties.PositionAnswerRepository;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.util.Objects;
import java.util.function.Function;

@Service
@Validated
public class DeleteAnswerUseCase implements Function<String, Mono<Void>> {

    private final AnswerRepository answerRepository;
    private final PositionAnswerRepository positionAnswerRepository;


    public DeleteAnswerUseCase(AnswerRepository answerRepository, PositionAnswerRepository positionAnswerRepository) {

        this.answerRepository = answerRepository;

        this.positionAnswerRepository = positionAnswerRepository;
    }


    @Override
    public Mono<Void> apply(String id) {
        Objects.requireNonNull(id, "Id is required");
            return answerRepository.deleteById(id)
                    .switchIfEmpty(Mono.defer(() -> positionAnswerRepository.deleteByAnswerId(id)));

    }

}
