package co.com.sofka.questions.reposioties;



import co.com.sofka.questions.collections.LikeFace;
import co.com.sofka.questions.collections.PositionAnswer;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;


@Repository
public interface PositionAnswerRepository extends ReactiveCrudRepository<PositionAnswer, String> {
    Flux<PositionAnswer> findAllByQuestionId(String id);
    Flux<PositionAnswer> findAllByAnswerId(String id);

    Mono<PositionAnswer> findFirstByQuestionIdAndUserId(String questionId, String userId);


    Mono<Void> deleteByAnswerId(String answerId);


}
