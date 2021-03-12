import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Manufacturer} from "./Manufacturer";

@Entity()
export class Brand {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public BrandName: string;    
      
    @ManyToOne(() => Manufacturer, (manufacturer) => manufacturer.brand,{eager: true, cascade: true})
    public Manufacturer: Manufacturer;
}
export default Brand;