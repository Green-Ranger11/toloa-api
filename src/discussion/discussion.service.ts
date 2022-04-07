import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../user/user.entity';
import { Discussion } from './discussion.entity';
import { CreateDiscussionDto } from './dto/create-discussion.dto';
import { UpdateDiscussionDto } from './dto/update-discussion.dto';

@Injectable()
export class DiscussionService {
  private readonly discussions = [];

  findAll(): Discussion[] {
    return this.discussions;
  }

  findOne(id: number) {
    const discussion = this.discussions.find(discussion => discussion.id === id);
    if (!discussion) {
      throw new NotFoundException();
    }
    return discussion;
  }

  create(createDiscussionDto: CreateDiscussionDto) {
    let newDiscussion = {...createDiscussionDto, id: this.discussions.length + 1, createdAt: new Date(), updatedAt: new Date()};
    this.discussions.push(newDiscussion);
    return newDiscussion;
  }

  update(id: number, updateDiscussionDto: UpdateDiscussionDto) {
    let discussionToUpdate = this.findOne(id);
    const index = this.discussions.indexOf(discussionToUpdate);
    discussionToUpdate = {...discussionToUpdate, ...updateDiscussionDto, updatedAt: new Date()};
    this.discussions[index] = discussionToUpdate;
    return discussionToUpdate;
  }

  delete(id: number) {
    const discussion = this.findOne(id);
    const index = this.discussions.indexOf(discussion);
    this.discussions.splice(index, 1);
    return true;
  }
}
