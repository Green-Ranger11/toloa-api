import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { Discussion } from './discussion.entity';

@Injectable()
export class DiscussionService {
  private readonly discussions: Discussion[] = [
    {
      id: 1,
      title: 'Discussion 1',
      content: 'Content 1',
      createdBy: 'User 1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Discussion 2',
      content: 'Content 2',
      createdBy: 'User 2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'Discussion 3',
      content: 'Content 3',
      createdBy: 'User 3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  findAll(): Discussion[] {
    return this.discussions;
  }

  findOne(id: number) {
    const discussion = this.discussions.find(discussion => discussion.id === id);
    if (!discussion) {
      // return 404
      return new NotFoundException();
    }
    return discussion;
  }

  create(discussion: Discussion): Discussion {
    let newDiscussion = {...discussion, id: this.discussions.length + 1, createdAt: new Date(), updatedAt: new Date()};
    this.discussions.push(newDiscussion);
    return discussion;
  }

  update(id: number, discussion: Discussion) {
    let discussionToUpdate = this.discussions.find(discussion => discussion.id === id);
    const index = this.discussions.indexOf(discussionToUpdate);
    if(!discussionToUpdate) return new NotFoundException();
    discussionToUpdate = {...discussionToUpdate, ...discussion, updatedAt: new Date()};
    this.discussions[index] = discussionToUpdate;
    return discussionToUpdate;
  }

  delete(id: number) {
    const discussion = this.discussions.find(discussion => discussion.id === id);
    if(!discussion) return new NotFoundException();
    const index = this.discussions.indexOf(discussion);
    this.discussions.splice(index, 1);
    return true;
  }
}
