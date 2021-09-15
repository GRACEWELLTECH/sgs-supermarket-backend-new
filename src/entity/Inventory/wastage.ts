import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import {Product} from "../Product"
@Entity()
export class Wastage{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Product,(product)=>product.id)
    product: number;

   @Column()
    weight: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    entryon:Date;

}