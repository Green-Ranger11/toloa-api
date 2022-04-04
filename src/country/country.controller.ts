import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
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
  findOne(@Param('id') id: string) {
    return this.countryService.findOne(Number(id));
  }

  @Post()
  create(@Body('name') countryName : string) {
    return this.countryService.create(countryName);
  }

  @Put(':id')
  update(@Body('name') countryName: string, @Param('id') countryId: string) {

    return this.countryService.update(Number(countryId), countryName);
  }

  @Delete(':id')
  delete(@Param('id') countryId: string) {
    return this.countryService.delete(Number(countryId));
  }
  


}
