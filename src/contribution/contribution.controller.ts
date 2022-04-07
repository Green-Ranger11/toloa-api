import { Body, Controller, Delete, Get, Param, Post, ParseIntPipe, Patch } from '@nestjs/common';
import { ContributionService } from './contribution.service';
import { CreateContributionDto } from './dto/create-contribution.dto';
import { UpdateContributionDto } from './dto/update-contribution.dto';

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
  create(@Body() createContributionDto: CreateContributionDto) {
    return this.contributionService.create(createContributionDto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateContributionDto: UpdateContributionDto) {
    return this.contributionService.update(id, updateContributionDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.contributionService.delete(id);
  }
  
}
