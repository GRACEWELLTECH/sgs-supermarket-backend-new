import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from 'typeorm';

import {Distributor} from './DistributorMaster'

@Entity()
export class DistributerDeliveryPersion{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    mobile:string;

    @Column()
    whatsapp:string;
}