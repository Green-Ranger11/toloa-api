export class CreateContributionDto {
  id: number;
  title: string;
  content: string;
  attachment: string;
  topicId: number;
  createdBy: number;
  createdAt: Date;
  updatedAt: Date;
}