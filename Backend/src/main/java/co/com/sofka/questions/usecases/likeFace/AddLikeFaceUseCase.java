package co.com.sofka.questions.usecases;


import co.com.sofka.questions.model.LikeFaceDTO;
import co.com.sofka.questions.model.QuestionDTO;

import co.com.sofka.questions.reposioties.LikeFaceRepository;
import co.com.sofka.questions.usecases.likeFace.SaveLikeState;
import co.com.sofka.questions.usecases.question.GetUseCase;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.util.Objects;

@Service
@Validated
public class AddLikeFaceUseCase implements SaveLikeState {
    Logger logger = LoggerFactory.getLogger(AddLikeFaceUseCase.class);

    private final MapperUtils mapperUtils;
    private final LikeFaceRepository likeFaceRepository;


    public AddLikeFaceUseCase(MapperUtils mapperUtils,  LikeFaceRepository likeFaceRepository) {


        this.mapperUtils = mapperUtils;
        this.likeFaceRepository = likeFaceRepository;
    }

    public Mono<LikeFaceDTO> apply(LikeFaceDTO likeFaceDTO) {
        Objects.requireNonNull(likeFaceDTO.getQuestionId(), "Id of the answer is required");
        return  likeFaceRepository.findFirstByQuestionIdAndUserId(likeFaceDTO.getQuestionId(), likeFaceDTO.getUserId()).map(data -> {
                logger.info("si existe");
                likeFaceDTO.setId(data.getId());
                return likeFaceRepository.deleteById(likeFaceDTO.getId()).thenReturn(likeFaceDTO);
                }).flatMap(data -> save(likeFaceDTO))
                .switchIfEmpty( this.save(likeFaceDTO)    );

    }

    private Mono<LikeFaceDTO> save(LikeFaceDTO likeFaceDTO){
        return  Mono.just(likeFaceDTO).flatMap(likeFaceTmp -> likeFaceRepository.save(mapperUtils.mapperToLikeFace(likeFaceDTO.getId()).apply(likeFaceDTO)) )
                .flatMap(data -> Mono.just(mapperUtils.mapEntityToLikeFace().apply(data)));

    }



}
