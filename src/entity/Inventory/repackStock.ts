import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';

import {Product} from '../../entity/Product'

@Entity()
export class RepackStock
{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Product,(product)=>product.id)
    product:number;

    @Column({default: 0})
    wareHouse:number;

    @Column({default: 0})
    store:number;

    @Column({default: 0})
    shop:number;

 

}