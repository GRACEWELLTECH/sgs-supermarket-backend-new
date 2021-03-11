import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class WeightUnit {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public UnitName: string;    
    @Column()
    public abbreviation : string;    
  
}
export default WeightUnit;