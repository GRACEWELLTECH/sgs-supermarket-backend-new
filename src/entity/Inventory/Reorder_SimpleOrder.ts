import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class simpleReorder {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    AgencyPurchaser: string;

    @Column()
    Cat_Sub_Type_Sub: String;

    @Column()
    ProductListBasedOn: string;

    @Column()
    QuantityCalculation: string;

    @Column()
    StockFor: number;
    
}