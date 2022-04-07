import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './organization.entity';
@Injectable()
export class OrganizationService {

  constructor(
    @InjectRepository(Organization) private organizationsRepository: Repository<Organization>
  ) {}

  create(createOrganizationDto: CreateOrganizationDto) {
    let organization = new Organization();
    organization.name = createOrganizationDto.name;
    return this.organizationsRepository.save(organization);
  }

  findAll() {
    return this.organizationsRepository.find();
  }

  findOne(id: number) {
    return this.organizationsRepository.findOneOrFail(id);
  }

  async update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
     const organization = await this.organizationsRepository.findOneOrFail(id);
      organization.name = updateOrganizationDto.name;
      return this.organizationsRepository.save(organization);
  }

  async remove(id: number) {
    const organization = await this.organizationsRepository.findOneOrFail(id);
    return this.organizationsRepository.remove(organization);
  }
}
