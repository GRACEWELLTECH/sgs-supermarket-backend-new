import {Entity,Column,PrimaryGeneratedColumn,ManyToOne} from 'typeorm'
import { Variant } from './Variant';

@Entity()
export class VariantValue{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value:String;

    @ManyToOne(()=>Variant,(variant)=>variant.id)
    variant:Variant
}