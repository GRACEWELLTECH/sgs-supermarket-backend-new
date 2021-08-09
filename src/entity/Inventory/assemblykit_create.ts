import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class assemblykit {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    KitType: string;

    @Column()
    KitName: string;

    @Column()
    ValidForm: string;

    @Column()
    ValidTill: string;

    @Column()
    ValidTillCalculation: string;

    @Column()
    Day: number;

}