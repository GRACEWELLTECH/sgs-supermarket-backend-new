import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import{RepackReuseDetail} from './RepackReuseDetail'
@Entity()
export class RepackReuse{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    entryOn:Date;

    @OneToMany(()=>RepackReuseDetail,(repackReuseDetail)=>repackReuseDetail.register)
    detail: RepackReuseDetail[]

}