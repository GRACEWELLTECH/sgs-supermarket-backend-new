import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToMany} from 'typeorm'
import {Manufacturer} from '../Manufacturer'

@Entity()
export class CategoryVsManufacturer {

@PrimaryGeneratedColumn()
id: number;

@Column()
categoryType: string;

@Column({nullable: true})
category:number;

@Column({nullable: true})
subCategory:number;

@Column({nullable: true})
productType:number;
@Column({nullable: true})
subType:number;
@Column({nullable: true})
kind:number;
@Column({nullable: true})
subKind:number;

@ManyToOne(()=>Manufacturer,(manufacturer)=> manufacturer.id)
manufacturer:number;
}