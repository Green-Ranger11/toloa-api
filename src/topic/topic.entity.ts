import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Contribution } from '../contribution/contribution.entity';
import { Discussion } from '../discussion/discussion.entity';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  title: string;

  @OneToMany(_ => Contribution, contribution => contribution.topic)
  contributions: Contribution[];

  @OneToMany(_ => Discussion, discussion => discussion.topic)
  discussions: Discussion[];

  @ManyToOne(_ => User, user => user.topics)
  createdBy: User;
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}