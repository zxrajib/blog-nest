import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'user'})
export class User{
  @PrimaryGeneratedColumn()
  id:number

  @Column( {unique:true})
  userName:string;

  @Column()
  password:string;

  @Column()
  createdDt:Date

  @Column({nullable:true})
  authStrategy:string
}