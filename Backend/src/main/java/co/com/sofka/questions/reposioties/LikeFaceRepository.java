package co.com.sofka.questions.reposioties;


import co.com.sofka.questions.collections.LikeFace;
import co.com.sofka.questions.enums.StateLikeFace;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;


@Repository
public interface LikeFaceRepository extends ReactiveCrudRepository<LikeFace, String> {
    Flux<LikeFace> findAllByQuestionId(String id);

    Mono<Void> deleteByQuestionId(String questionId);

    Flux<StateLikeFace> findAllByQuestionIdAndState(String id,StateLikeFace stateLikeFace);
    Mono<LikeFace> findFirstByQuestionIdAndUserId(String questionId, String userId);
}
