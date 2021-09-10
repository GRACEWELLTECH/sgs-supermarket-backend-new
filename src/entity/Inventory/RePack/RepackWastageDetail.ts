
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'

import {Product} from '../../Product';
import {RepackWastage} from './RepackWastage'
@Entity()
export class RepackWastageDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Product,(product)=>product.id)
    product:number;

    @Column({default:0})
    weight: number;
    
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    entryOn:Date;

    @ManyToOne(()=>RepackWastage,(repackWastage)=>repackWastage.id)
    wastage:number

}