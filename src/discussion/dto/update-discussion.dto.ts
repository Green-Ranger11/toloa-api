import { PartialType } from "@nestjs/swagger";
import { CreateDiscussionDto } from "./create-discussion.dto";

export class UpdateDiscussionDto extends PartialType(CreateDiscussionDto){}