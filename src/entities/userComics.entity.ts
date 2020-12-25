import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Comic } from "./comic.entity";
import { User } from "./user.entity";

@Entity('user_comic')
export class UserComic {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: Number

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @ManyToOne(type => Comic, Comic => Comic.userComics, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'fk_comic' })
  comic: Comic

  @ManyToOne(type => User, User => User.userComics, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'fk_user' })
  user: User

}