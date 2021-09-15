import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Assemblykit {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    KitType: string;

    @Column()
    KitName: string;

    @Column()
    validForm: string;

    @Column()
    validTill: string;

    @Column()
    validity: string;

    @Column()
    validityUnit: string;

    @Column({default: true})
    status: boolean;

}

export default Assemblykit