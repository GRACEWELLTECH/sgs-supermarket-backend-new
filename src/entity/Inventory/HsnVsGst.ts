import { Entity, PrimaryGeneratedColumn, Column,ManyToOne} from "typeorm";

import {Gst} from '../Gst'
@Entity()
export class HsnVsGst{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Gst,(gst)=>gst.id)
    gstId: number;

    @Column()
    hsnCode: string

    @Column()
    descriprion: string


}