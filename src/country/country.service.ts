import { Injectable, NotFoundException } from '@nestjs/common';
import { Country } from './country.entity';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountryService {
  private readonly countries: Country[] = [
    { id: 1, name: 'Samoa' },
    { id: 2, name: 'Tonga' },
    { id: 3, name: 'Fiji' },
    { id: 4, name: 'Vanuatu' },
  ];

  findAll(): Country[] {
    return this.countries;
  }

  findOne(id: number) {
    const country = this.countries.find(country => country.id === id);
    if (!country) {
      throw new NotFoundException();
    }
    return country;
  }

  create(createCountryDto: CreateCountryDto) {
    const country = new Country();
    country.name = createCountryDto.name;
    country.id = this.countries.length + 1;
    this.countries.push(country);
    return country;
  }

  update(countryId: number, updateCountryDto: UpdateCountryDto) {
    let country = this.findOne(countryId);
    country = {...country, ...updateCountryDto}
    return country;
  }

  delete(id: number) {
    const country = this.findOne(id);
    const index = this.countries.indexOf(country);
    this.countries.splice(index, 1);
  }

}
