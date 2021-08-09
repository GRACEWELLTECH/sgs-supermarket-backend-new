import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class MinMaxReorder {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    FilterProduct: string;

    @Column()
    StockInwardFrequency: number;

    @Column()
    MaintainMinStock: string;

    @Column()
    MaintainMaxStock: string;


}


