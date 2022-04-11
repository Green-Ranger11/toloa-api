import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDiscussionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNumber()
  @IsNotEmpty()
  topicId: number;

  @IsNumber()
  @IsNotEmpty()
  createdBy: number;
}