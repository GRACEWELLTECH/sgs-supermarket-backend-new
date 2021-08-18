import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from "typeorm";

import {Assemblykit} from './assemblykit_create'
import {Product} from '../Product'
@Entity()
export class prepareAssemblyKit {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Assemblykit,(assemblykit)=>assemblykit.id)
    assemply : number;

    @ManyToOne(()=>Product,(product)=>product.id)
    product: number;

}