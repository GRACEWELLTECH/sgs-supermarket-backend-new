import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ProductType} from "./ProductType";

@Entity()
export class ProductSubType {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public SubTypeName: string;    
      
    @ManyToOne(() => ProductType, (productType) => productType.SubType,{eager: true, cascade: true})
    public productType: ProductType;
}
export default ProductSubType;