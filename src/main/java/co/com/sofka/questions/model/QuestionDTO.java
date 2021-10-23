package co.com.sofka.questions.model;




import co.com.sofka.questions.enums.StateLikeFace;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.util.*;

@Data
@Builder
@AllArgsConstructor

public class QuestionDTO {
    private String id;
    @NotBlank
    private String userId;
    @NotBlank
    private String question;
    @NotBlank
    private String type;
    @NotBlank
    private String category;
    private List<AnswerDTO> answers;

    private Map<StateLikeFace , Integer> calification;


    public QuestionDTO() {

    }

    public QuestionDTO(String userId, String question, String type, String category) {
        this.userId = userId;
        this.question = question;
        this.type = type;
        this.category = category;
    }

    public QuestionDTO(String id, String userId, String question, String type, String category) {
        this.id = id;
        this.userId = userId;
        this.question = question;
        this.type = type;
        this.category = category;
    }

    public List<AnswerDTO> getAnswers() {
        this.answers = Optional.ofNullable(answers).orElse(new ArrayList<>());
        return answers;
    }
    public Map<StateLikeFace , Integer> getCalification(){
        this.calification = Optional.ofNullable(this.calification).orElse(createDefaulCalification());
        return   this.calification;
    }

    private Map<StateLikeFace , Integer> createDefaulCalification(){
        var calificationTmp = new HashMap<StateLikeFace,Integer>();
        calificationTmp.put(StateLikeFace.HAPPY,0);
        calificationTmp.put(StateLikeFace.SATISFIED,0);
        calificationTmp.put(StateLikeFace.UNHAPPY,0);
        return  calificationTmp;
    }
//    public List<LikeFaceDTO> getLikesFace() {
//        this.likesFace = Optional.ofNullable(likesFace).orElse(new ArrayList<>());
//        return likesFace;
//    }

    public void setAnswers(List<AnswerDTO> answers) {
        this.answers = answers;
    }
//    public void setLikesFace(List<LikeFaceDTO> likesFace) {
//        this.likesFace = likesFace;
//    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "QuestionDTO{" +
                "id='" + id + '\'' +
                ", userId='" + userId + '\'' +
                ", question='" + question + '\'' +
                ", type='" + type + '\'' +
                ", category='" + category + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        QuestionDTO that = (QuestionDTO) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
