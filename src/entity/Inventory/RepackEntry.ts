import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from 'typeorm'

import {Product} from  '../../entity/Product'


@Entity()
export class RepackEntry
{
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(()=>Product,(product)=>product.id)
    product:number;

    @Column()
    quantity:number


}