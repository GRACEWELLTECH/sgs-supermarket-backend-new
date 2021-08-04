import {Column, Entity, ManyToOne,OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./Category";
import {ProductType} from "./ProductType";

@Entity()
export class SubCategory {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public SubCategoryName: string;    
    
    @OneToMany(() => ProductType,(productType) => productType.subCategory)
    public ProductType: ProductType[]; 

    @ManyToOne(() => Category, (category) => category.subCategories)
    public category: Category;
}
export default SubCategory;