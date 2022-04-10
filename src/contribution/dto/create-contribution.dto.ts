import { IsString, IsUrl , IsNotEmpty, IsNumber } from 'class-validator';
export class CreateContributionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  attachment: string;

  @IsNumber()
  @IsNotEmpty()
  topicId: number;

  @IsNumber()
  @IsNotEmpty()
  createdBy: number;
}