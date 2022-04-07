import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Topic } from '../topic/topic.entity';
import { Comment } from '../comment/comment.entity';
@Entity()
export class Discussion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @ManyToOne(_ => Topic, topic => topic.discussions)
    topic: Topic;

    @OneToMany(_ => Comment, comment => comment.discussion)
    comments: Comment[];

    @ManyToOne(_ => User, user => user.discussions)
    createdBy: User;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}