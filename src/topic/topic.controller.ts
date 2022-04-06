import { Body, Controller, Delete, Get, Param, Post, Put, ParseIntPipe } from '@nestjs/common';
import { TopicService } from './topic.service';

@Controller('topic')
export class TopicController {
  constructor(private topicService: TopicService){}

  @Get()
  findAll() {
    return this.topicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.topicService.findOne(id);
  }

  @Post()
  create(@Body('title') title: string) {
    return this.topicService.create(title);
  }

  @Put(':id')
  update(@Body('title') title: string, @Param('id', ParseIntPipe) id: number) {
    return this.topicService.update(id, title);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.topicService.delete(id);
  }
  
}
