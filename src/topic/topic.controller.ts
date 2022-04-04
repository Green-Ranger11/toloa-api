import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TopicService } from './topic.service';

@Controller('topic')
export class TopicController {
  constructor(private topicService: TopicService){}

  @Get()
  findAll() {
    return this.topicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.topicService.findOne(Number(id));
  }

  @Post()
  create(@Body('title') title: string) {
    return this.topicService.create(title);
  }

  @Put(':id')
  update(@Body('title') title: string, @Param('id') id: string) {
    return this.topicService.update(Number(id), title);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.topicService.delete(Number(id));
  }
  
}
