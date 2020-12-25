import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserComic } from "./userComics.entity";

@Entity('user')
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: Number

  @Column('character varying')
  email: String

  @Column('character varying')
  password: String

  @OneToMany(type => UserComic, UserComic => UserComic.user)
  userComics: UserComic[]

}