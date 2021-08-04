import {Column, Entity,PrimaryGeneratedColumn} from 'typeorm'


@Entity()
export class Gst{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    gst:number;
    @Column()
    status:string;
}