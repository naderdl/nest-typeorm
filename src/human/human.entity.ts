import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Human {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: true })
  isTest: boolean;
}
