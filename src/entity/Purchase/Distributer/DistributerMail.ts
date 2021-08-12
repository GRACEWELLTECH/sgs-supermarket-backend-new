import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from 'typeorm';

import {Distributor} from './DistributorMaster'

@Entity()
export class DistributerMail{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    mail:string;

    // @Column()
    // mobile:string;

    // @Column()
    // whatsapp:string;
}