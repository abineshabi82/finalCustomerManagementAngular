import { Component, OnInit } from "@angular/core";
import { OrderService } from "../order.service";
import { OrderModel } from "../orderModel";
import { MapDataService } from "../map-data.service";
import { CustomersServiceService } from "../customers-service.service";

@Component({
  selector: "app-customer-order-view",
  templateUrl: "./customer-order-view.component.html"
})
export class CustomerOrderViewComponent implements OnInit {
  pq;
  mapData: CustomersServiceService;

  constructor(private data: MapDataService) {}

  os: OrderService = new OrderService();
  or: OrderModel[] = this.os.getOrders();
  orders: OrderModel[];

  ngOnInit() {
    this.data.currentMapData.subscribe(mapData => (this.mapData = mapData));
    this.orders = this.or.filter(x => x.id == this.mapData.id);
    console.log("stop");
    console.log(this.mapData);
  }
}
