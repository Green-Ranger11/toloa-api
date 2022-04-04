import { Injectable, NotFoundException } from '@nestjs/common';
import { Topic } from './topic.entity';

@Injectable()
export class TopicService {

   topics = [
    { id: 1, title: 'Obesity', createdBy: 'admin', createdAt: new Date(), updatedAt: new Date() },
    { id: 2, title: 'Climate Change', createdBy: 'admin', createdAt: new Date(), updatedAt: new Date() },
    { id: 3, title: 'Domestic Violence', createdBy: 'admin', createdAt: new Date(), updatedAt: new Date() },
    { id: 4, title: 'Poverty', createdBy: 'admin', createdAt: new Date(), updatedAt: new Date() },
  ];

  findAll() {
    return this.topics;
  }

  findOne(id: number) {
    const topic = this.topics.find(topic => topic.id === id);
    if (!topic) {
      // return 404
      return new NotFoundException();
    }
    return topic;
  }

  create(topicTitle: string) {
    const topic = new Topic();
    topic.title = topicTitle;
    topic.id = this.topics.length + 1;
    topic.createdBy = 'admin';
    topic.createdAt = new Date();
    topic.updatedAt = new Date();
    topic.id = this.topics.length + 1;
    this.topics.push(topic);
    return topic;
  }

  update(topicId: number, topicTitle: string) {
    const topic = this.topics.find(topic => topic.id === topicId);
    if(!topic) return new NotFoundException();
    topic.title = topicTitle;
    topic.updatedAt = new Date();
    return topic;
  }

  delete(id: number) {
    const topic = this.topics.find(topic => topic.id === id);
    if(!topic) return new NotFoundException();
    const index = this.topics.indexOf(topic);
    this.topics.splice(index, 1);
    return true;
  }


  


}
