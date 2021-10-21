package co.com.sofka.questions.usecases.question;

import co.com.sofka.questions.reposioties.AnswerRepository;
import co.com.sofka.questions.reposioties.LikeFaceRepository;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.util.Objects;
import java.util.function.Function;

@Service
@Validated
public class DeleteUseCase implements Function<String, Mono<Void>> {
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final LikeFaceRepository likeFaceRepository;

    public DeleteUseCase(AnswerRepository answerRepository, QuestionRepository questionRepository , LikeFaceRepository likeFaceRepository) {
        this.questionRepository = questionRepository;
        this.answerRepository = answerRepository;
        this.likeFaceRepository = likeFaceRepository;
    }


    @Override
    public Mono<Void> apply(String id) {
        Objects.requireNonNull(id, "Id is required");
            return questionRepository.deleteById(id)
                    .switchIfEmpty(Mono.defer(() -> answerRepository.deleteByQuestionId(id)))
                .switchIfEmpty(Mono.defer(()-> likeFaceRepository.deleteByQuestionId(id)));
    }

}
