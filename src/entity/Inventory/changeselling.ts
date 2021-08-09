import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class changeselling{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    UpdateRateBy : string;


    @Column()
    EnterPercentage : string;

    @Column()
    RoundOffPaisa: string;
}



