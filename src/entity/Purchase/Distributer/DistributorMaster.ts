import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from "typeorm";

import {DistributerMail} from './DistributerMail'
import {DistributerLandline} from './DistributerLandline'
// import {DistributerSalesPersion} from './DistributerSalespersion'
import {DistributerDeliveryPersion} from './DistributerDeliveryPerson'
import {OrderVsDelivery} from './OrderVsDelivery'

@Entity()
export class Distributor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    approvalRequired: boolean;

    @Column()
    limit: number;

    @Column()
    name: string;

    @Column()
    alternateName: string;

    @Column()
    address: string;

    @Column()
    pincode: number;

    @Column()
    place: string;

    @Column()
    state: string;

    @Column()
    country: string;

    

    @Column()
    inventoryType: string;

    @Column()
    gstType: string;

    @Column()
    purchase: string;

    @Column({nullable: true})
    gstNumber: string;


    @OneToMany(()=>DistributerLandline,(landline)=>landline.distributer)
    landline: DistributerLandline[];

    @OneToMany(()=>DistributerDeliveryPersion,(delivery)=>delivery.distributer)
    deliveryPerson: DistributerLandline[];


    // @OneToMany(()=>DistributerSalesPersion,(sales)=>sales.distributer)
    // salesPerson: DistributerSalesPersion[];

   
    @OneToMany(()=>DistributerMail,(mail)=>mail.distributer)
    email: DistributerMail[];

    @Column()
    ordervsDeliveryType: string;
    
    @OneToMany(()=>OrderVsDelivery,(order)=>order.distributer)
    orderVsDelivery: OrderVsDelivery[];
}

