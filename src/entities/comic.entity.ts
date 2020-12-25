import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserComic } from "./userComics.entity";

@Entity('comic')
export class Comic {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: Number

  @Column('character varying')
  title: String

  @Column('text')
  description: String

  @Column('varchar', { name: 'image_url', length: 300, nullable: true })
  imageUrl: String

  @OneToMany(type => UserComic, UserComic => UserComic.comic)
  userComics: UserComic[]
}