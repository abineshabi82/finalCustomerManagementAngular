import { Injectable } from '@angular/core';
import { OrderModel } from './orderModel';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  os:OrderModel[];
  constructor() { }
  getOrders():OrderModel[]{
    this.os=[new OrderModel(0,"bat",1),new OrderModel(1,"ball",2),new OrderModel(2,"camera",3),new OrderModel(3,"mirror",4),new OrderModel(4,"carrom",1)];
    return this.os;
  }
}
