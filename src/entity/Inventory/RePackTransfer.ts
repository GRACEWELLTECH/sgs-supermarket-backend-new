import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class RepackTransfer{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    from:string;

    @Column()
    to:string;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    transferOn:Date;
}