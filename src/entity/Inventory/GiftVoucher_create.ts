import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class GiftVoucher {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;

    @Column()
    numberPrefix: string;

    @Column()
    startingNumber: number;

    @Column()
    numberOfVouchers: number;

    @Column()
    value: number;

}



