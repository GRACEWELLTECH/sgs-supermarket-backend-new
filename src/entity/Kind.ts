import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import{SubKind} from './SubKind'

@Entity()
export class Kind {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public KindName: string;    
    @OneToMany(() => SubKind,(subKind) => subKind.kind)
    public subKinds: SubKind[];
}
export default Kind;