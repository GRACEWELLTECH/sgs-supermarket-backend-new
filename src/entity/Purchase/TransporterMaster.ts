import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TransporterMaster {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nameTransporter: string;

    @Column()
    address: string;

   }

   export default TransporterMaster