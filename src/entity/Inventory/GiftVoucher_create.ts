import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class GiftVoucher {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    VoucherName : string;

    @Column()
    VoucherNumberPrefix: number;

    @Column()
    StartingNumber: number;

    @Column()
    NumberOfVouchers: number;

    @Column()
    Vouchers: number;

}



