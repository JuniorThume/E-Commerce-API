import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Variety } from './Variety';
import { IProduct } from '@products/domain/models/IProduct';
import { Exclude } from 'class-transformer';


@Entity('products')
export class Product implements IProduct {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  description!: string;

  @Column()
  category!: string;

  @OneToMany(() => Variety, variety => variety.product)
  @JoinColumn({'name': 'varieties'})
  varieties!: Variety[]
  
  @Exclude()
  @Column()
  created_at!: Date;
  
  @Exclude()
  @Column()
  updated_at!: Date;
  
}
