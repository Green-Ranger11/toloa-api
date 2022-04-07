import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { Topic } from './topic.entity';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';

@Injectable()
export class TopicService {

  constructor(
    @InjectRepository(Topic) private topicsRepository: Repository<Topic>,
    private usersService: UserService
  ){}
  

  findAll() {
    return this.topicsRepository.find();
  }

  async findOne(id: number) {
    const topic = await this.topicsRepository.findOne(id);
    if(!topic) throw new NotFoundException(`Topic with id ${id} not found`);
    return topic;
  }

  async create(createTopicDto: CreateTopicDto) {
    const USER_ID = 1;
    const user = await this.usersService.findOne(USER_ID);
    let topic = new Topic();
    topic.title = createTopicDto.title;
    topic.description = createTopicDto.description;
    topic.createdBy = user;
    topic.createdAt = new Date();
    topic.updatedAt = new Date();
    return this.topicsRepository.save(topic);
  }

  async update(topicId: number, updateTopicDto: UpdateTopicDto) {
    const topic = await this.findOne(topicId);
    topic.title = updateTopicDto.title;
    topic.updatedAt = new Date();
    return this.topicsRepository.save(topic);
  }

  async delete(id: number) {
    const topic = await this.findOne(id);
    return this.topicsRepository.remove(topic);
  }


}
