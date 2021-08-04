import {Column, Entity, ManyToOne,OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ProductType} from "./ProductType";
import {Kind} from "./Kind";

@Entity()
export class ProductSubType {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public SubTypeName: string;    
      
    @ManyToOne(() => ProductType, (productType) => productType.SubType)
    public productType: ProductType;
    
    @OneToMany(()=>Kind,(kind)=>kind.id)
    public kind:Kind[]
}
export default ProductSubType;