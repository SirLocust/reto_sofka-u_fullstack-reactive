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
  private final GetUseCase getUseCase;


  public AddLikeFaceUseCase(MapperUtils mapperUtils,  LikeFaceRepository likeFaceRepository ,GetUseCase getUseCase) {


        this.mapperUtils = mapperUtils;
        this.likeFaceRepository = likeFaceRepository;
    this.getUseCase = getUseCase;
  }

    public Mono<QuestionDTO> apply(LikeFaceDTO likeFaceDTO) {
        Objects.requireNonNull(likeFaceDTO.getQuestionId(), "Id of the answer is required");
        return  likeFaceRepository.findFirstByQuestionIdAndUserId(likeFaceDTO.getQuestionId(), likeFaceDTO.getUserId()).map(data -> {

                likeFaceDTO.setId(data.getId());
                return likeFaceRepository.deleteById(likeFaceDTO.getId()).thenReturn(likeFaceDTO);
                }).flatMap(data -> saveAndReturnQuestionDto(likeFaceDTO))
                .switchIfEmpty( this.saveAndReturnQuestionDto(likeFaceDTO)    );

    }

    private Mono<QuestionDTO> saveAndReturnQuestionDto(LikeFaceDTO likeFaceDTO){
        return  Mono.just(likeFaceDTO).flatMap(likeFaceTmp -> likeFaceRepository.save(mapperUtils.mapperToLikeFace(likeFaceDTO.getId()).apply(likeFaceDTO)) )
                .flatMap(data -> Mono.just(mapperUtils.mapEntityToLikeFace().apply(data))).flatMap(likeFace -> getUseCase.apply(likeFace.getQuestionId()));

    }



}
