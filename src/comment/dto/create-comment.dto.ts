import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNumber()
  discussionId: number;
}