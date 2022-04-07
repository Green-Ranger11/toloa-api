export class CreateContributionDto {
  id: number;
  title: string;
  content: string;
  attachment: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}