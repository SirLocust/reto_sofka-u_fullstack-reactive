package co.com.sofka.questions.usecases.likeFace;

import co.com.sofka.questions.collections.LikeFace;
import co.com.sofka.questions.enums.StateLikeFace;
import co.com.sofka.questions.model.LikeFaceDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.LikeFaceRepository;
import co.com.sofka.questions.usecases.AddLikeFaceUseCase;
import co.com.sofka.questions.usecases.MapperUtils;
import co.com.sofka.questions.usecases.question.GetUseCase;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;

import java.util.HashMap;

import static org.mockito.Mockito.*;


@RunWith(MockitoJUnitRunner.class)
class AddLikeFaceUseCaseTest {
  AddLikeFaceUseCase addLikeFaceUseCase;
  LikeFaceRepository likeFaceRepository;
  GetUseCase getUseCase;

  @BeforeEach
  void setUp() {
    MapperUtils mapperUtils = new MapperUtils();
    likeFaceRepository = mock(LikeFaceRepository.class);
    getUseCase = mock(GetUseCase.class);
    addLikeFaceUseCase = new AddLikeFaceUseCase(mapperUtils,likeFaceRepository,getUseCase);
  }

  @Test
  void AddLikeFaceApply(){

    var likeFaceDto = LikeFaceDTO.builder()
            .id("xxx").questionId("1X1")
            .state(StateLikeFace.HAPPY)
            .userId("user1")
            .build();
    var likeFce = LikeFace.builder().id("xxx").questionId("1X1")
            .state(StateLikeFace.HAPPY)
            .userId("user1")
            .build();
    var calification2 = new HashMap<StateLikeFace, Integer>();
    calification2.put(StateLikeFace.HAPPY, 0);
    calification2.put(StateLikeFace.SATISFIED, 0);
    calification2.put(StateLikeFace.UNHAPPY, 0);

    var calification = new HashMap<StateLikeFace, Integer>();
    calification.put(StateLikeFace.HAPPY, 1);
    calification.put(StateLikeFace.SATISFIED, 0);
    calification.put(StateLikeFace.UNHAPPY, 0);

    var questionDto = QuestionDTO.builder().id("r22").userId("222").category("rojo").type("red").calification(calification2).build();
    var questionDto2 = QuestionDTO.builder().id("r22").userId("222").category("rojo").type("red").calification(calification).build();

    when(likeFaceRepository.findFirstByQuestionIdAndUserId(likeFce.getQuestionId(),likeFce.getUserId())).thenReturn(Mono.just(likeFce));
    when(likeFaceRepository.deleteById(likeFaceDto.getId())).thenReturn(Mono.empty());
    when(getUseCase.apply(likeFce.getQuestionId())).thenReturn(Mono.just(questionDto2));
    when(likeFaceRepository.save(likeFce)).thenReturn(Mono.just(likeFce));


    StepVerifier.create(addLikeFaceUseCase.apply(likeFaceDto)).expectNextMatches(questionprue -> {

      assert questionprue.getCalification().get(StateLikeFace.HAPPY).equals(1);
      return  true;
    }).verifyComplete();
  }
}