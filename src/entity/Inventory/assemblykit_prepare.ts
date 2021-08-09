import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class prepareAssemblyKit {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    SelectAssembly_Kit : string;

    @Column()
    SelectAssemblyNameForAssembly: string;

}