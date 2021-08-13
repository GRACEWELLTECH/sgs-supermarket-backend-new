import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TransporterMaster {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    NameTransporter: string;

    @Column()
    Address: string;

   }