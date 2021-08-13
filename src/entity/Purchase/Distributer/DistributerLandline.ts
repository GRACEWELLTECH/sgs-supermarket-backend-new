import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from 'typeorm';

import {Distributor} from './DistributorMaster'

@Entity()
export class DistributerLandline{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    landline:string;

    @ManyToOne(()=>Distributor,(distributor)=>distributor.id)
    distributer:Distributor

    // @Column()
    // whatsapp:string;
}