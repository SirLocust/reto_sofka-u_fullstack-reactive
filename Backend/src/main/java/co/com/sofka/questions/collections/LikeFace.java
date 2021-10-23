package co.com.sofka.questions.collections;

import co.com.sofka.questions.enums.StateLikeFace;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LikeFace {

  @Id
  private String id;
  private String userId;
  private String questionId;
  private StateLikeFace state;

}
