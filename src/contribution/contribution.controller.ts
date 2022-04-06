import { Body, Controller, Delete, Get, Param, Post, Put, ParseIntPipe } from '@nestjs/common';
import { ContributionService } from './contribution.service';

@Controller('contribution')
export class ContributionController {
  constructor(private contributionService: ContributionService){}

  @Get()
  findAll() {
    return this.contributionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.contributionService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.contributionService.create(body);
  }

  @Put(':id')
  update(@Body() body: any, @Param('id', ParseIntPipe) id: number) {
    return this.contributionService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.contributionService.delete(id);
  }
  
}
