import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'

import {Product} from '../Product'
import {RepackReuse} from './RepackReuse'

@Entity()
export class RepackReuseDetail{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Product,(product)=>product.id)
    product:number;
    @Column({default: 0})
    quantity:number;
    
    @ManyToOne(()=>Product,(product)=>product.id)
    bulkProduct:number;

    @Column({default: 0})
    availableQuantity:number;

    @ManyToOne(()=>RepackReuse,(repackReuse)=>repackReuse.id)
    register:number
}