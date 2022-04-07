import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Contribution } from '../contribution/contribution.entity';
import { Discussion } from '../discussion/discussion.entity';
import { Topic } from '../topic/topic.entity';
import { Comment } from '../comment/comment.entity';
import { Organization } from '../organization/organization.entity';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  role: Role;

  @ManyToOne(_ => Organization, organization => organization.users)
  organization: Organization;

  // User Relationships

  @OneToMany(_ => Topic, topic => topic.createdBy)
  topics: Topic[];

  @OneToMany(_ => Contribution, contribution => contribution.createdBy)
  contributions: Contribution[];

  @OneToMany(_ => Discussion, discussion => discussion.createdBy)
  discussions: Discussion[];

  @OneToMany(_ => Comment, comment => comment.createdBy)
  comments: Comment[];
}
