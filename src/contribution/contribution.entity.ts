import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Topic } from '../topic/topic.entity';
import { Country } from '../country/country.entity';
import { Organization } from '../organization/organization.entity';
@Entity()
export class Contribution {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    attachment: string;

    @ManyToOne(_ => Topic, topic => topic.contributions)
    topic: Topic;

    @ManyToMany(_ => Country)
    @JoinTable()
    countries: Country[];

    @ManyToOne(_ => User, user => user.contributions)
    createdBy: User;

    @ManyToMany(_ => Organization)
    @JoinTable()
    contributors: Organization[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}