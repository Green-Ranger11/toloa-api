import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

}