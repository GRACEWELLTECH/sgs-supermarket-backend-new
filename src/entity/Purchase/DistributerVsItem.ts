import {Entity,PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';

import{Distributor} from './Distributer/DistributorMaster'
import{Product} from '../Product'

@Entity()
export class DistributerVsItem{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Distributor,(distributor)=> distributor.id)
    distributer: number;

    @ManyToOne(()=>Product,(product)=> product.id)
    product: number;

    @Column({default: true})
    status: boolean

}