import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./Category";

@Entity()
export class SubCategory {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public SubCategoryName: string;    
      
    @ManyToOne(() => Category, (category) => category.subCategories,{eager: true, cascade: true})
    public category: Category;
}
export default SubCategory;