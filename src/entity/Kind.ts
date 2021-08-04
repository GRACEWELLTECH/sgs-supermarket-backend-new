import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import{SubKind} from './SubKind'
import{ProductSubType} from './ProductSubType'

@Entity()
export class Kind {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public KindName: string;    
    @OneToMany(() => SubKind,(subKind) => subKind.kind)
    public subKinds: SubKind[];
    @ManyToOne(()=>ProductSubType,(productSubType)=>productSubType.kind)
    subType:ProductSubType
}
export default Kind;