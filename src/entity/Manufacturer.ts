import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import{Brand} from './Brand'

@Entity()
export class Manufacturer {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public manufacturerName: string;    
    @Column()
    public address: string;    
    @OneToMany(() => Brand,(brand) => brand.Manufacturer)
    public brand: Brand[];
}
export default Manufacturer;