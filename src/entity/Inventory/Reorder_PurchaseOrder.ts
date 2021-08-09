import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class PurchaseReorder {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    SelectDay: number;

    @Column()
    Agency: String;

    @Column()
    ProductListBasedOn: string;

    @Column()
    QuantityCalculation: string;

    @Column()
    StockFor: number;
    
}