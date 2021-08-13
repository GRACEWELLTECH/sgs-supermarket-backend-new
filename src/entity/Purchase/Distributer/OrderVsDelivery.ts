import {Entity,Column,PrimaryGeneratedColumn,ManyToOne} from 'typeorm'

import {Distributor} from './DistributorMaster'
@Entity()
export class OrderVsDelivery{

    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(()=>Distributor,(distributer)=> distributer.id)
    distributer:number;

    @Column()
    orderDay:string;

    @Column()
    deliveryDay:string;

}