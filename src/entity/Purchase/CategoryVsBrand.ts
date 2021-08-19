import {Column,Entity,ManyToOne,OneToMany,PrimaryGeneratedColumn} from  'typeorm'

import {Brand} from '../Brand'

@Entity()
export  class CategoryVsBrand{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    categoryType:string;

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

   @ManyToOne(()=>Brand,(brand)=>brand.id)
   brand:number
   
}