import { Entity, PrimaryGeneratedColumn, Column,ManyToOne} from "typeorm";

import {Product} from '../Product'

@Entity()
export class ItemVsEan{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Product,(product)=>product.id)
    productId: number;

    @Column()
    eanCode: string;
    
    @Column()
    mrp:number;

    @Column()
    retail:number;

}