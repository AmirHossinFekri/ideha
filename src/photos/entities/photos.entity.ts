import { PropertyEntity } from 'src/properties/entity/property.entity';
import { UserEntity } from 'src/users/entity/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class PhotoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  url: string;

  @ManyToOne('UserEntity', 'photos')
  user: UserEntity;

  @OneToOne('PropertyEntity')
  @JoinTable()
  property: PropertyEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
