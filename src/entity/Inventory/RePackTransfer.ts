import { Entity, PrimaryGeneratedColumn, Column,  ManyToOne, OneToMany} from 'typeorm';
import {RepackTransferDetail} from './RepackTransferDetails'
@Entity()
export class RepackTransfer{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    transferFrom:string;

    @Column()
    transferTo:string;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    transferOn:Date;

    @OneToMany(()=>RepackTransferDetail,(repackTransferDetail)=>repackTransferDetail.transfer)
    detail: RepackTransferDetail[]

}