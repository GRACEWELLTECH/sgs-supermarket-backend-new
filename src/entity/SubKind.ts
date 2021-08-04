import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Kind} from "./Kind";

@Entity()
export class SubKind {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public SubKindName: string;    
      
    @ManyToOne(() => Kind, (Kind) => Kind.subKinds)
    public kind: Kind;
}
export default SubKind;