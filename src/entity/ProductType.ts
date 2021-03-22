import {Column, Entity, OneToMany,ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ProductSubType} from './ProductSubType'
import {SubCategory} from './SubCategory'

@Entity()
export class ProductType {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public typeName: string;

    @ManyToOne(() => SubCategory, (subCategory) => subCategory.id,{eager: true, cascade: true})
    public subCategory: SubCategory;  

    @OneToMany(() => ProductSubType,(productSubType) => productSubType.productType)
    public SubType: ProductSubType[];
}
export default ProductType;