import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';

import {Distributor} from './Distributer/DistributorMaster'
import {Manufacturer} from '../Manufacturer'

@Entity()
export class DistributerVsManufacturer {
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(()=>Manufacturer,(manufacturer)=> manufacturer.id)
    manufacturer:number;

    @ManyToOne(()=>Distributor,(distributor)=>distributor.id)
    distributor:number;
}