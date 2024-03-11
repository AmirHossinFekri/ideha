import { PhotoEntity } from 'src/photos/entities/photos.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: String, nullable: false, unique: true })
  username: string;

  @Column({ type: String, nullable: false, unique: true })
  email: string;

  @Column({ type: String, nullable: false })
  password: string;

  @OneToMany('PhotoEntity', 'user')
  photos: PhotoEntity[];

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
