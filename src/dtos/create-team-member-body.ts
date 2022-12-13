import { IsNotEmpty, Length } from "class-validator";

export class CreateTeamMemberBody {
  @IsNotEmpty()
  @Length(5, 100)
  name: string;
  @IsNotEmpty({
    message: "Member function should not be empty"
  })
  function: string;
}
