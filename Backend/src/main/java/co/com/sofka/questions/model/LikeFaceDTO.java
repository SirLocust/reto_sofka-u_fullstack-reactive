package co.com.sofka.questions.model;

import co.com.sofka.questions.enums.StateLikeFace;
import lombok.*;

import javax.validation.constraints.NotBlank;

@Data
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
public class LikeFaceDTO {

  private String id;
  private String userId;
  @NotBlank(message = "Debe existir el userId para este objeto")
  private String questionId;
  private StateLikeFace state;

}
