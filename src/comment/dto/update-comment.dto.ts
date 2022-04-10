import { IsNotEmpty, IsString } from "class-validator";

export class UpdateCommentDto {
  @IsString()
  @IsNotEmpty()
  content: string;
}