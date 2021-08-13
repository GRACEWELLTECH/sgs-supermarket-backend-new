import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from 'typeorm';

import {Distributor} from './DistributorMaster'

@Entity()
export class DistributerMail{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    mail:string;

    @ManyToOne(()=>Distributor,(distributor)=>distributor.id)
    distributer:Distributor


    // @Column()
    // whatsapp:string;
}