import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DiscussionService } from './discussion.service';

@Controller('discussion')
export class DiscussionController {
  constructor(private discussionService: DiscussionService){}

  @Get()
  findAll() {
    return this.discussionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discussionService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any) {
    return this.discussionService.create(body);
  }

  @Put(':id')
  update(@Body() body: any, @Param('id') id: string) {
    return this.discussionService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.discussionService.delete(Number(id));
  }

}
