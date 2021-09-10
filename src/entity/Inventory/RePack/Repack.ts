import { Entity, PrimaryGeneratedColumn, Column,OneToMany} from "typeorm";

import {RepackEntry} from './RepackEntry';

@Entity()
export class Repack{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    addedon:Date

    @OneToMany(()=>RepackEntry,(repackEntry)=>repackEntry.repack)
    entry:RepackEntry[]

}