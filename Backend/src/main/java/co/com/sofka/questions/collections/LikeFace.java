package co.com.sofka.questions.collections;

import co.com.sofka.questions.enums.StateLikeFace;
import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class LikeFace {

  @Id
  private String id;
  private String userId;
  private String questionId;
  private StateLikeFace state;

}
