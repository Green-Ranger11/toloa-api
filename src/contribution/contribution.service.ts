import { Injectable, NotFoundException } from '@nestjs/common';
import { Contribution } from './contribution.entity';

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

  create(contribution: Contribution){
    let newContribution = {...contribution, id: this.contributions.length + 1, createdAt: new Date(), updatedAt: new Date()};
    this.contributions.push(newContribution);
    return newContribution;
  }

  update(id: number, contribution: Contribution){
    let contributionToUpdate = this.contributions.find(contribution => contribution.id === id);
    const index = this.contributions.indexOf(contributionToUpdate);
    if(!contributionToUpdate) throw new NotFoundException();
    contributionToUpdate = {...contributionToUpdate, ...contribution, updatedAt: new Date()};
    this.contributions[index] = contributionToUpdate;
    return contributionToUpdate;
  }

  delete(id: number){
    const contribution = this.contributions.find(collaboration => collaboration.id === id);
    if(!contribution) throw new NotFoundException();
    const index = this.contributions.indexOf(contribution);
    this.contributions.splice(index, 1);
    return true;
  }


  

}

