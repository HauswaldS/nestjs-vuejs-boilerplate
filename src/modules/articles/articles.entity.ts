import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('articles')
export class Articles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 200})
    title: string;

    @Column('text')
    content: string;

    @Column('int')
    views: number;

    @Column()
    isPublished: boolean;
}