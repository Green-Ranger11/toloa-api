import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  users = [
    { id: 1, username: 'johnjones', firstName: 'John', lastName: 'Jones', password: '123', role: 'admin', organizationId: 1 },
    { id: 2, username: 'johndoe', firstName: 'John', lastName: 'Doe', password: '123', role: 'user', organizationId: 1 },
    { id: 3, username: 'janedoe', firstName: 'Jane', lastName: 'Doe', password: '123', role: 'user', organizationId: 2 },
  ]

  create(createUserDto: CreateUserDto) {
    const user = {
      id: this.users.length + 1,
      username: createUserDto.username,
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      password: createUserDto.password,
      role: 'user',
      organizationId: createUserDto.organizationId,
    }
    this.users.push(user);
    return user;
  }

  findAll() {
    return [...this.users];
  }

  findOne(id: number) {
    const user = this.users.find(user => user.id === id);
    if(!user) throw new NotFoundException(`User with ID "${id}" not found`);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let user = this.users.find(user => user.id === id);
    if(!user) throw new NotFoundException(`User with ID "${id}" not found`);
    const index = this.users.indexOf(user);
    user = {
      ...user,
      ...updateUserDto,
    }
    this.users[index] = user;
    return user;
  }

  remove(id: number) {
    const user = this.users.find(user => user.id === id);
    if(!user) throw new NotFoundException(`User with ID "${id}" not found`);
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }
}
