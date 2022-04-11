import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contribution } from './contribution.entity';
import { CreateContributionDto } from './dto/create-contribution.dto';
import { UpdateContributionDto } from './dto/update-contribution.dto';
import { UserService } from '../user/user.service';
import { TopicService } from '../topic/topic.service';

@Injectable()
export class ContributionService {
  
  constructor(
    @InjectRepository(Contribution) private readonly contributionsRepository: Repository<Contribution>,
    private readonly usersService: UserService,
    private readonly topicsService: TopicService
  ){}

  findAll(){
    return this.contributionsRepository.find();
  }

  findOne(id: number){
    const contribution = this.contributionsRepository.findOne(id);
    if(!contribution) throw new NotFoundException(`Contribution with id ${id} not found`);
    return contribution;
  }

  async create(createContributionDto: CreateContributionDto){
    const USER_ID = createContributionDto.createdBy;
    const user = await this.usersService.findOne(USER_ID);

    const TOPIC_ID = createContributionDto.topicId;
    const topic = await this.topicsService.findOne(TOPIC_ID);

    let contribution = new Contribution();
    contribution.title = createContributionDto.title;
    contribution.content = createContributionDto.content;
    contribution.attachment = createContributionDto.attachment;
    contribution.createdBy = user;
    contribution.topic = topic;
    contribution.createdAt = new Date();
    contribution.updatedAt = new Date();

    // TODO: ADD COUNTRIES AND ORGANIZATIONS
    return this.contributionsRepository.save(contribution);
  }

  async update(id: number, updateContributionDto: UpdateContributionDto){
    const contribution = await this.findOne(id);
    contribution.title = updateContributionDto.title;
    contribution.content = updateContributionDto.content;
    contribution.attachment = updateContributionDto.attachment;
    contribution.updatedAt = new Date();
    return this.contributionsRepository.save(contribution);
  }

  async delete(id: number){
    const contribution = await this.findOne(id);
    return this.contributionsRepository.remove(contribution);
  }
}

