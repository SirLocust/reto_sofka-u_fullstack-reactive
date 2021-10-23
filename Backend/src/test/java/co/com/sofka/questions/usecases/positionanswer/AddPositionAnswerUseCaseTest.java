package co.com.sofka.questions.usecases.positionanswer;

import co.com.sofka.questions.collections.Answer;
import co.com.sofka.questions.collections.LikeFace;
import co.com.sofka.questions.collections.PositionAnswer;
import co.com.sofka.questions.enums.StateLikeFace;
import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.model.LikeFaceDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.LikeFaceRepository;
import co.com.sofka.questions.reposioties.PositionAnswerRepository;
import co.com.sofka.questions.usecases.AddLikeFaceUseCase;
import co.com.sofka.questions.usecases.MapperUtils;
import co.com.sofka.questions.usecases.question.GetUseCase;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;

import java.util.ArrayList;
import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.*;


@RunWith(MockitoJUnitRunner.class)
class AddPositionAnswerUseCaseTest {
  AddPositionAnswerUseCase addPositionAnswerUseCase;
  PositionAnswerRepository positionAnswerRepository;
  GetUseCase getUseCase;

  @BeforeEach
  void setUp() {
    MapperUtils mapperUtils = new MapperUtils();
    positionAnswerRepository = mock(PositionAnswerRepository.class);
    getUseCase = mock(GetUseCase.class);
    addPositionAnswerUseCase = new AddPositionAnswerUseCase(positionAnswerRepository,getUseCase);
  }

  @Test
  void AddLikeFaceApply(){

    var positionAnswer = PositionAnswer.builder()
            .id("xxx").questionId("1X1")
            .value(1)
            .answerId("1111222")
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
    var answerTmp = AnswerDTO.builder().questionId("r22").position(1).build();
    var answerList = new ArrayList<AnswerDTO>();
    answerList.add(answerTmp);

    var questionDto = QuestionDTO.builder().id("r22").userId("222").category("rojo").type("red").calification(calification2).build();
    var questionDto2 = QuestionDTO.builder().id("r22").userId("222").category("rojo").type("red").calification(calification).answers(answerList).build();

    when(positionAnswerRepository.findFirstByQuestionIdAndUserId(positionAnswer.getQuestionId(),positionAnswer.getUserId())).thenReturn(Mono.just(positionAnswer));
    when(positionAnswerRepository.deleteById(positionAnswer.getId())).thenReturn(Mono.empty());
    when(getUseCase.apply(positionAnswer.getQuestionId())).thenReturn(Mono.just(questionDto2));
    when(positionAnswerRepository.save(positionAnswer)).thenReturn(Mono.just(positionAnswer));


    StepVerifier.create(addPositionAnswerUseCase.apply(positionAnswer)).expectNextMatches(questionprue -> {

      assert questionprue.getAnswers().get(0).getPosition().equals(1);
      return  true;
    }).verifyComplete();
  }
}