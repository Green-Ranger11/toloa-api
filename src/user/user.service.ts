import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { OrganizationService } from '../organization/organization.service';
import { User } from './user.entity';
import { LoginUserDto } from './dto/login-user.dto';

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

  async login(loginUserDt: LoginUserDto){
    const user = await this.usersRepository.findOne({
      where: {
        username: loginUserDt.username,
      }
    });
    if(!user) throw new NotFoundException(`User with username ${loginUserDt.username} not found`);
    if(user.password !== loginUserDt.password) throw new BadRequestException(`Password is incorrect`);
    return user;
  }

  findAll() {
    return this.usersRepository.find({ relations: ['organization', 'topics', 'contributions', 'discussions', 'comments'] });
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne(id, {relations: ['organization', 'topics', 'contributions', 'discussions', 'comments',]});
    if(!user) throw new NotFoundException(`User with id ${id} not found`);
    return user;
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
