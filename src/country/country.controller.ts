import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { Country } from './country.entity';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

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
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.create(createCountryDto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) countryId: number, @Body() updateCountryDto: UpdateCountryDto) {

    return this.countryService.update(countryId, updateCountryDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) countryId: number) {
    return this.countryService.delete(countryId);
  }
  


}
