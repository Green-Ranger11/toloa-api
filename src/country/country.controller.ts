import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { Country } from './country.entity';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get()
  findAll(): Country[] {
    return this.countryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.countryService.findOne(id);
  }

  @Post()
  create(@Body('name') countryName : string) {
    return this.countryService.create(countryName);
  }

  @Put(':id')
  update(@Body('name') countryName: string, @Param('id', ParseIntPipe) countryId: number) {

    return this.countryService.update(countryId, countryName);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) countryId: number) {
    return this.countryService.delete(countryId);
  }
  


}
