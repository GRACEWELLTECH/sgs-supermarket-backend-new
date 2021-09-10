import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';

import{RepackweightLossDetail} from './RepackWeightLossDetails'
@Entity()
export class RepackWeightloss 
{
@PrimaryGeneratedColumn()
id: number;

@Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
entryOn:Date;

@OneToMany(()=>RepackweightLossDetail,(repackweightLossDetail)=>repackweightLossDetail.register)
detail: RepackweightLossDetail[];
}