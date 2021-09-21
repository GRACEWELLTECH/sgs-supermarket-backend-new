import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import {ItemVsEan} from './ItemVsEan'

@Entity()
export default class ReorderMaxMin{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>ItemVsEan,(itemVsEan)=>itemVsEan.id)
    ean:number;

    @Column()
    min:number;

    @Column()
    max:number;
}