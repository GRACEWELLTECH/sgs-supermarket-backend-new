import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ProductSubType} from './ProductSubType'

@Entity()
export class ProductType {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public typeName: string;    
    @OneToMany(() => ProductSubType,(productSubType) => productSubType.productType)
    public SubType: ProductSubType[];
}
export default ProductType;