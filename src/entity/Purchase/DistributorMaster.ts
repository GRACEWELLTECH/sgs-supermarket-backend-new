import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class DistributorMaster {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ApprovalRequired: boolean;

    @Column()
    limit: number;

    @Column()
    Name: string;

    @Column()
    AlternateName: string;

    @Column()
    Address: string;

    @Column()
    Pincode: number;

    @Column()
    Place: string;

    @Column()
    State: string;

    @Column()
    Country: string;

    @Column()
    OfficeLandline: number;

    @Column()
    SalesPersonName: string;

    @Column()
    SalesPersonMobile: number;

    @Column()
    SalesPersonWhatsapp: number;

    @Column()
    DeliveryPersonName: string;

    @Column()
    DeliveryPersonMobile: number;

    @Column()
    DeliveryPersonWhatsapp: number;

    @Column()
    EmailID: string;

    @Column()
    InventoryType: string;

    @Column()
    GSTType: string;

    @Column()
    Purchase: string;

    @Column()
    GSTNumber: string;

    @Column()
    OrderVsDeliveryType: string;
}

