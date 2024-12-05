import { Order } from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  order_item_id: number;

  @ManyToOne(() => Order, (order) => order.order_item)
  order: Order;

  @ManyToOne(() => Product, (product) => product)
  product: Product;

  @Column()
  quantity: number;

  @Column('decimal')
  price: number;
}
