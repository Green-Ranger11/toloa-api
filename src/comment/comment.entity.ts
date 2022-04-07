import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Discussion } from '../discussion/discussion.entity';
@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(_ => Discussion, discussion => discussion.comments)
  discussion: Discussion;
  
  @ManyToOne(_ => User, user => user.comments)
  createdBy: User;
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}