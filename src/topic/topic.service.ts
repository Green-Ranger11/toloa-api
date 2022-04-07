import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return this.topicsRepository.findOneOrFail(id);
  }

  async create(createTopicDto: CreateTopicDto) {
    const USER_ID = 1;
    const user = await this.usersService.findOne(USER_ID);
    let topic = new Topic();
    topic.title = createTopicDto.title;
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
