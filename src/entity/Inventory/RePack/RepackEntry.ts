import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from 'typeorm'

import {Product} from  '../../Product'
import {Repack} from './Repack'

@Entity()
export class RepackEntry
{
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(()=>Product,(product)=>product.id)
    product:number;

    @Column()
    quantity:number

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    entryOn:Date

    @ManyToOne(()=>Repack,(repack)=>repack.id)
    repack:number

}