
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'

import {RepackWastageDetail} from './RepackWastageDetail'

@Entity()
export class RepackWastage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    entryOn:Date;

    @OneToMany(()=>RepackWastageDetail,(repackWastageDetail)=>repackWastageDetail.wastage)
    detail: RepackWastageDetail[]
}