import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,} from 'typeorm';
import {ItemVsEan} from "./ItemVsEan";

@Entity()
export class stock {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>ItemVsEan,(item)=>item.id)
    ean:number;

    @Column({default:0})
    godown:number;

    @Column({default:0})
    store:number;

    @Column({default:0})
    shop:number;


}