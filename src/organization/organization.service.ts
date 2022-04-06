import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

@Injectable()
export class OrganizationService {

  organizations = [{ id: 1, name: 'UNDP'}, { id: 2, name: 'SPREP'}];

  create(createOrganizationDto: CreateOrganizationDto) {
    this.organizations.push({
      id: this.organizations.length + 1,
      name: createOrganizationDto.name,
    });
  }

  findAll() {
    return [...this.organizations];
  }

  findOne(id: number) {
    const org = this.organizations.find(organization => organization.id === id);
    if(!org) throw new NotFoundException(`Organization with ID "${id}" not found`);
    return org;
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    const org = this.organizations.find(organization => organization.id === id);
    if(!org) throw new NotFoundException(`Organization with ID "${id}" not found`);
    const index = this.organizations.indexOf(org);
    if(updateOrganizationDto?.name){
      org.name = updateOrganizationDto.name;
      this.organizations[index] = org;
    }
    return org;
  }

  remove(id: number) {
    const org = this.organizations.find(organization => organization.id === id);
    if(!org) throw new NotFoundException(`Organization with ID "${id}" not found`);
    const index = this.organizations.indexOf(org);
    this.organizations.splice(index, 1);
  }
}
