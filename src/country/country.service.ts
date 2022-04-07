import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './country.entity';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountryService {

  constructor(
    @InjectRepository(Country) private countriesRepository: Repository<Country>
  ) {}
  
  findAll() {
    return this.countriesRepository.find();
  }

  findOne(id: number) {
    return this.countriesRepository.findOneOrFail(id);
  }

  create(createCountryDto: CreateCountryDto) {
    let country = new Country();
    country.name = createCountryDto.name;
    return this.countriesRepository.save(country);
  }

  async update(countryId: number, updateCountryDto: UpdateCountryDto) {
    const country = await this.findOne(countryId);
    country.name = updateCountryDto.name;
    return this.countriesRepository.save(country);
  }

  async delete(id: number) {
    const country = await this.findOne(id);
    return this.countriesRepository.remove(country);
  }

}
