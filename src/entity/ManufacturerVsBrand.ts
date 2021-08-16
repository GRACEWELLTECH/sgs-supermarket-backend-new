import {Column, Entity,PrimaryGeneratedColumn,ManyToOne} from 'typeorm'

import {Brand} from './Brand';
import {Manufacturer} from './Manufacturer';

@Entity()
export class ManufacyturerVsBrand{
    @PrimaryGeneratedColumn()
    id: number;

   @ManyToOne(()=>Manufacturer,(manufacturer)=>manufacturer.id)
   manufacturer:number;

   @ManyToOne(()=>Brand,(brand)=>brand.id)
   brand:number;

}