import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CommentService {
  comments = [
    {
      id: 1,
      content: 'Content 1',
      discussionId: 1,
      createdBy: 'User 1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

  ]

  create(discussionId: number, content: string, createdBy: string) {
    let newComment = {content, discussionId, createdBy, id: this.comments.length + 1, createdAt: new Date(), updatedAt: new Date()};
    this.comments.push(newComment);
    return newComment;
  }

  findCommentsByDiscussionId(discussionId: number) {
    return this.comments.filter(comment => comment.discussionId === discussionId);
  }

  update(discussionId: number, id: number, updatedContent: string) {
    let commentToUpdate = this.comments.find(comment => comment.discussionId === discussionId && comment.id === id);
    const index = this.comments.indexOf(commentToUpdate);
    if(!commentToUpdate) return new NotFoundException();
    commentToUpdate = {...commentToUpdate, content: updatedContent, updatedAt: new Date()};
    this.comments[index] = commentToUpdate;
    return commentToUpdate;
  }

  delete(discussionId: number, id: number) {
    const comment = this.comments.find(comment => comment.discussionId === discussionId && comment.id === id);
    if(!comment) return new NotFoundException();
    const index = this.comments.indexOf(comment);
    this.comments.splice(index, 1);
    return true;
  }

}
