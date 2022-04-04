import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CollaborationService } from './collaboration.service';

@Controller('collaboration')
export class CollaborationController {
  constructor(private collaborationService: CollaborationService){}

  @Get()
  findAll() {
    return this.collaborationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collaborationService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any) {
    return this.collaborationService.create(body);
  }

  @Put(':id')
  update(@Body() body: any, @Param('id') id: string) {
    return this.collaborationService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.collaborationService.delete(Number(id));
  }
  
}
