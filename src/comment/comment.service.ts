import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DiscussionService } from '../discussion/discussion.service';
import { UserService } from '../user/user.service';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {

  constructor(
    @InjectRepository(Comment) private commentsRepository: Repository<Comment>, 
    private discussionService: DiscussionService,
    private userService: UserService
    ){}

  async create(discussionId: number, createCommentDto: CreateCommentDto): Promise<Comment> {
    const user = await this.userService.findOne(createCommentDto.createdBy);
    const discussion = await this.discussionService.findOne(discussionId);
    const comment = new Comment();
    comment.discussion = discussion;
    comment.content = createCommentDto.content;
    comment.createdBy = user;
    comment.createdAt = new Date();
    comment.updatedAt = new Date();
    return this.commentsRepository.save(comment);
  }

  async findCommentsByDiscussionId(discussionId: number) {
    const discussion = await this.discussionService.findOne(discussionId);
    return discussion?.comments || [];
  }

  async update(_discussionId: number, id: number, updateContentDto: UpdateCommentDto) {
    const comment = await this.commentsRepository.findOne(id);
    if(!comment) throw new NotFoundException(); 
    comment.content = updateContentDto.content;
    comment.updatedAt = new Date();
    return this.commentsRepository.save(comment);
  }

  async delete(_discussionId: number, id: number) {
    const comment = await this.commentsRepository.findOne(id);
    if(!comment) throw new NotFoundException(); 
    return this.commentsRepository.remove(comment);
  }

}
