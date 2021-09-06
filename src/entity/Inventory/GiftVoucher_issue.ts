import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from 'typeorm';
import {GiftVoucher}  from '../../entity/Inventory/GiftVoucher_create'
import {Product}  from '../../entity/Product'

@Entity()
export class GiftvoucherIssue{

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    allowLoyalty:boolean;

    @Column()
    basedOn: string;


    @ManyToOne(()=>GiftVoucher,(giftVoucher)=>giftVoucher.id)
    giftVoucher:number;

    @ManyToOne(()=>Product,(product)=>product.id)
    product:number;

   }