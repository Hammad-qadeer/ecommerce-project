import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItem } from './entities/order-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,
  ) {}
  createOrderItem(createOrderItemDto: CreateOrderItemDto): Promise<OrderItem> {
    return this.orderItemRepository.save(createOrderItemDto);
  }

  findAll(): Promise<OrderItem[]> {
    return this.orderItemRepository.find();
  }

  findOne(id: number): Promise<OrderItem> {
    return this.orderItemRepository.findOne({ where: { order_item_id: id } });
  }

  // update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
  //   return `This action updates a #${id} orderItem`;
  // }

  async removeOrderItem(id: number) {
    await this.orderItemRepository.delete(id);
  }
}
