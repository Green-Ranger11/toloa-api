import { Injectable, NotFoundException } from '@nestjs/common';
import { Contribution } from './contribution.entity';
import { CreateContributionDto } from './dto/create-contribution.dto';
import { UpdateContributionDto } from './dto/update-contribution.dto';

@Injectable()
export class ContributionService {
  contributions = [
    {
      id: 1,
      title: 'Contribution 1',
      content: 'Content 1',
      attachment: '',
      createdBy: 'User 1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Contribution 2',
      content: 'Content 2',
      attachment: '',
      createdBy: 'User 2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'Contribution 3',
      content: 'Content 3',
      attachment: '',
      createdBy: 'User 3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  findAll(){
    return this.contributions;
  }

  findOne(id: number){
    const contribution = this.contributions.find(collaboration => collaboration.id === id);
    if(!contribution) throw new NotFoundException();
    return contribution;
  }

  create(createContributionDto: CreateContributionDto){
    let newContribution = {...createContributionDto, id: this.contributions.length + 1, createdAt: new Date(), updatedAt: new Date()};
    this.contributions.push(newContribution);
    return newContribution;
  }

  update(id: number, updateContributionDto: UpdateContributionDto){
    let contributionToUpdate = this.findOne(id);
    const index = this.contributions.indexOf(contributionToUpdate);
    contributionToUpdate = {...contributionToUpdate, ...updateContributionDto, updatedAt: new Date()};
    this.contributions[index] = contributionToUpdate;
    return contributionToUpdate;
  }

  delete(id: number){
    const contribution = this.findOne(id);
    const index = this.contributions.indexOf(contribution);
    this.contributions.splice(index, 1);
    return true;
  }


  

}

