import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Distributor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    approvalRequired: boolean;

    @Column()
    limit: number;

    @Column()
    name: string;

    @Column()
    alternateName: string;

    @Column()
    address: string;

    @Column()
    pincode: number;

    @Column()
    place: string;

    @Column()
    state: string;

    @Column()
    Country: string;

    @Column()
    landline: number;

    @Column()
    salesPersonName: string;

    @Column()
    salesPersonMobile: number;

    @Column()
    salesPersonWhatsapp: number;

    @Column()
    deliveryPersonName: string;

    @Column()
    deliveryPersonMobile: number;

    @Column()
    deliveryPersonWhatsapp: number;

    @Column()
    email: string;

    @Column()
    inventoryType: string;

    @Column()
    gstType: string;

    @Column()
    purchase: string;

    @Column()
    gstNumber: string;

    @Column()
    orderVsDeliveryType: string;
}

