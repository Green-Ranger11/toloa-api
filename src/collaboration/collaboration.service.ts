import { Injectable, NotFoundException } from '@nestjs/common';
import { Collaboration } from './collaboration.entity';

@Injectable()
export class CollaborationService {
  collaborations = [
    {
      id: 1,
      title: 'Collaboration 1',
      content: 'Content 1',
      attachment: '',
      createdBy: 'User 1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Collaboration 2',
      content: 'Content 2',
      attachment: '',
      createdBy: 'User 2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'Collaboration 3',
      content: 'Content 3',
      attachment: '',
      createdBy: 'User 3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  findAll(){
    return this.collaborations;
  }

  findOne(id: number){
    const collaboration = this.collaborations.find(collaboration => collaboration.id === id);
    if(!collaboration) return new NotFoundException();
    return collaboration;
  }

  create(collaboration: Collaboration){
    let newCollaboration = {...collaboration, id: this.collaborations.length + 1, createdAt: new Date(), updatedAt: new Date()};
    this.collaborations.push(newCollaboration);
    return collaboration;
  }

  update(id: number, collaboration: Collaboration){
    let collaborationToUpdate = this.collaborations.find(collaboration => collaboration.id === id);
    const index = this.collaborations.indexOf(collaborationToUpdate);
    if(!collaborationToUpdate) return new NotFoundException();
    collaborationToUpdate = {...collaborationToUpdate, ...collaboration, updatedAt: new Date()};
    this.collaborations[index] = collaborationToUpdate;
    return collaborationToUpdate;
  }

  delete(id: number){
    const collaboration = this.collaborations.find(collaboration => collaboration.id === id);
    if(!collaboration) return new NotFoundException();
    const index = this.collaborations.indexOf(collaboration);
    this.collaborations.splice(index, 1);
    return true;
  }


  

}

