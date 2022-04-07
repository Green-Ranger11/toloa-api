import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Discussion } from './discussion.entity';
import { CreateDiscussionDto } from './dto/create-discussion.dto';
import { UpdateDiscussionDto } from './dto/update-discussion.dto';
import { UserService } from '../user/user.service';
import { TopicService } from '../topic/topic.service';

@Injectable()
export class DiscussionService {

  constructor(
    @InjectRepository(Discussion) private discussionsRepository: Repository<Discussion>,
    private userService: UserService,
    private topicService: TopicService
  ) {}


  findAll() {
    return this.discussionsRepository.find();
  }

  async findOne(id: number) {
    const discussion = await this.discussionsRepository.findOne(id);
    if(!discussion) throw new NotFoundException(`Discussion with id ${id} not found`);
    return discussion;
  }

  async create(createDiscussionDto: CreateDiscussionDto) {
    const USER_ID = 1;
    const user = await this.userService.findOne(USER_ID);

    const TOPIC_ID = createDiscussionDto?.topicId;
    const topic = await this.topicService.findOne(TOPIC_ID);

    let discussion = new Discussion();
    discussion.title = createDiscussionDto.title;
    discussion.content = createDiscussionDto.content;
    discussion.createdBy = user;
    discussion.topic = topic;
    discussion.createdAt = new Date();
    discussion.updatedAt = new Date();

    return this.discussionsRepository.save(discussion);
  }

  async update(id: number, updateDiscussionDto: UpdateDiscussionDto) {
    const discussion = await this.findOne(id);
    discussion.title = updateDiscussionDto.title;
    discussion.content = updateDiscussionDto.content;
    discussion.updatedAt = new Date();
    return this.discussionsRepository.save(discussion);
  }

  async delete(id: number) { 
    const discussion = await this.findOne(id);
    return this.discussionsRepository.remove(discussion);
  }
}
