import { Body, Controller, Delete, Get, Param, Post, Patch, ParseIntPipe } from '@nestjs/common';
import { DiscussionService } from './discussion.service';
import { CreateDiscussionDto } from './dto/create-discussion.dto';
import { UpdateDiscussionDto } from './dto/update-discussion.dto';

@Controller('discussion')
export class DiscussionController {
  constructor(private discussionService: DiscussionService){}

  @Get()
  findAll() {
    return this.discussionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.discussionService.findOne(id);
  }

  @Post()
  create(@Body() createDiscussionDto: CreateDiscussionDto) {
    return this.discussionService.create(createDiscussionDto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDiscussionDto: UpdateDiscussionDto) {
    return this.discussionService.update(id, updateDiscussionDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.discussionService.delete(id);
  }

}
