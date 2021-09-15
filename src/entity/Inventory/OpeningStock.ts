import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import {Product} from "../Product"

@Entity()
export default class OpeningStock{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Product,(product)=>product.id)
    product:number;

    @Column()
    quantity: number;

    
}