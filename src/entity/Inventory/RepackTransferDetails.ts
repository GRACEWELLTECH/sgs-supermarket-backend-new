import { Entity, PrimaryGeneratedColumn, Column,ManyToOne} from 'typeorm';
import {RepackTransfer} from './RePackTransfer';
import {Product} from '../Product';

@Entity()
export class RepackTransferDetail{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Product,(product)=>product.id)
    product:number

    @Column()
    quantity: number;

    @Column()
    from:string;

    @Column()
    to:string;

    @ManyToOne(()=>RepackTransfer,(repackTransfer)=>repackTransfer.id)
    transfer:number;
}