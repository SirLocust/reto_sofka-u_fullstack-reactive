package co.com.sofka.questions.collections;

import co.com.sofka.questions.enums.StateLikeFace;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@Builder
public class PositionAnswer {

  @Id
  private String id;
  private String userId;
  private String questionId;
  private String answerId;
  private Integer value;
}
