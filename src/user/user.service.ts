import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { OrganizationService } from '../organization/organization.service';
import { User } from './user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private organizationService: OrganizationService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const organization = await this.organizationService.findOne(createUserDto.organizationId);
    let user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.organization = organization
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneOrFail(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let user = await this.findOne(id);
    user = {...user, ...updateUserDto};
    return this.usersRepository.save(user);
  }

 async remove(id: number) {
    const user = await this.findOne(id);
    return this.usersRepository.delete(user);
  }
}
