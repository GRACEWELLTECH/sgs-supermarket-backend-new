import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'

import {Wastage} from './wastage';
import {Product} from "../Product"
@Entity()
export class WastageDetail{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity:number;

    @ManyToOne(()=>Product,(product)=>product.id)
    product:number;

    @ManyToOne(()=>Wastage,(wastage)=>wastage.id)
    entry:number


}