import { Entity, PrimaryGeneratedColumn, Column,ManyToOne} from 'typeorm'

import {Product} from '../Product'
import{RepackWeightloss} from './RepackWeightLoss';

@Entity()
export class RepackweightLossDetail{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Product,(product)=>product.id)
    product:number;

    @Column()
    weight:number;

    @ManyToOne(()=>RepackWeightloss,(weightLoss)=>weightLoss.id)
    register:number;

}