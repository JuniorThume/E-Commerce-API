import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Product } from "./Product";
import 'reflect-metadata';
import { Exclude } from "class-transformer";

@Entity('varieties')
export class Variety {
  @PrimaryColumn()
  product_id!: number;

  @ManyToOne(() => Product, product => product.varieties)
  @JoinColumn({ name: 'product_id' })
  product!: Product;

  @Column()
  color!: string;  

  @Column()
  price!: number;

  @Column({ type: 'json', default: '{"sizes": []}'})
  available_sizes!: string;

  @Column()
  on_sale!: boolean;

  @Column()
  sale_price!: number;

  @Column()
  stock!: number;

  @Exclude()
  @Column()
  created_at!: Date;

  @Exclude()
  @Column()
  updated_at!: Date;
}
