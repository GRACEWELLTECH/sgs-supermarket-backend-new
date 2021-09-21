import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from 'typeorm';

import {Distributor} from './DistributorMaster'

@Entity()
export class DistributerSalesPersion{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
    
    @Column()
    mobile:string;

    @Column({default:null})
    mobile1:string;

    @Column({default:null})
    mobile2:string;

    @Column({default:null})
    whatsapp:string;

    @Column({default:null})
    whatsapp1:string;
    
    @Column({default:null})
    whatsapp2:string;

    @ManyToOne(()=>Distributor,(distributor)=>distributor.id)
    distributer:number

}