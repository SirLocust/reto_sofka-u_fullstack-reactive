package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Answer;
import co.com.sofka.questions.collections.LikeFace;
import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.model.LikeFaceDTO;
import co.com.sofka.questions.model.QuestionDTO;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class MapperUtils {

    public Function<AnswerDTO, Answer> mapperToAnswer() {
        return updateAnswer -> {
            var answer = new Answer();
            answer.setId(updateAnswer.getId());
            answer.setPosition(updateAnswer.getPosition());
            answer.setQuestionId(updateAnswer.getQuestionId());
            answer.setUserId(updateAnswer.getUserId());
            answer.setAnswer(updateAnswer.getAnswer());
            return answer;
        };
    }

    public Function<LikeFaceDTO, LikeFace> mapperToLikeFace(String id) {
        return updateLikeFace -> {
            var likeFace = new LikeFace();
            likeFace.setId(id);
            likeFace.setQuestionId(updateLikeFace.getQuestionId());
            likeFace.setUserId(updateLikeFace.getUserId());
            likeFace.setState(updateLikeFace.getState());
            return likeFace;
        };
    }

    public Function<QuestionDTO, Question> mapperToQuestion(String id) {
        return updateQuestion -> {
            var question = new Question();
            question.setId(id);
            question.setUserId(updateQuestion.getUserId());
            question.setCategory(updateQuestion.getCategory());
            question.setQuestion(updateQuestion.getQuestion());
            question.setUserId(updateQuestion.getUserId());
            question.setType(updateQuestion.getType());
            return question;
        };
    }

    public Function<Question, QuestionDTO> mapEntityToQuestion() {
        return entity -> new QuestionDTO(
                entity.getId(),
                entity.getUserId(),
                entity.getQuestion(),
                entity.getType(),
                entity.getCategory()
        );
    }

    public Function<Answer, AnswerDTO> mapEntityToAnswer() {
        return entity -> new AnswerDTO(

                entity.getId(),
                entity.getUserId(),
                entity.getQuestionId(),
                entity.getAnswer(),
                entity.getPosition()
        );
    }
    public Function<LikeFace, LikeFaceDTO> mapEntityToLikeFace() {
        return entity -> new LikeFaceDTO(
                entity.getId(),
                entity.getUserId(),
                entity.getQuestionId(),
                entity.getState()
        );
    }
}
