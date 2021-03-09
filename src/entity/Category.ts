import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import{SubCategory} from './SubCategory'

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public CategoryName: string;    
    @OneToMany(() => SubCategory,(subCategory) => subCategory.category)
    public subCategories: SubCategory[];
}
export default Category;