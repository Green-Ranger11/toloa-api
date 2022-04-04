import { Injectable, NotFoundException } from '@nestjs/common';
import { Country } from './country.entity';

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
      // return 404
      return new NotFoundException();
    }
    return country;
  }

  create(countryName: string): Country {
    const country = new Country();
    country.name = countryName;
    country.id = this.countries.length + 1;
    this.countries.push(country);
    return country;
  }

  update(countryId: number, countryName: string) {
    const country = this.findOne(countryId);
    if(!country) return new NotFoundException();
    country.name = countryName;
    return country;
  }

  delete(id: number) {
    const country = this.countries.find(country => country.id === id);
    if(!country) return new NotFoundException();
    const index = this.countries.indexOf(country);
    this.countries.splice(index, 1);
    return true;
  }

}
