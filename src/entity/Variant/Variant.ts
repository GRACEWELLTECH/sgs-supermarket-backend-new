import {Entity,OneToMany,ManyToOne,Column, PrimaryGeneratedColumn} from "typeorm";

enum Type {
   text,
   dropdown
  }

@Entity()
export class Variant{
   
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    Name: string;

    @Column()
    type: string;

}