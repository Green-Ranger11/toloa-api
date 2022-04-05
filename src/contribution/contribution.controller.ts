import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContributionService } from './contribution.service';

@Controller('contribution')
export class ContributionController {
  constructor(private contributionService: ContributionService){}

  @Get()
  findAll() {
    return this.contributionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contributionService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any) {
    return this.contributionService.create(body);
  }

  @Put(':id')
  update(@Body() body: any, @Param('id') id: string) {
    return this.contributionService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.contributionService.delete(Number(id));
  }
  
}
