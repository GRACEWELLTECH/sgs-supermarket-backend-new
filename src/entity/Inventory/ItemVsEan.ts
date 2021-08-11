import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";



@Entity()
export class ItemVsEan{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productId: number;

    @Column()
    eanCode: string;
    
    @Column()
    mrp:number;

    @Column()
    retail:number;

}