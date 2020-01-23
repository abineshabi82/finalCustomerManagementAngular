import { Component, OnInit } from '@angular/core';
import { CustomersServiceService } from '../customers-service.service';
import { CusService } from '../cus.service';

@Component({
  selector: 'app-customer-list-view',
  templateUrl: './customer-list-view.component.html',
  styleUrls: ['./customer-list-view.component.css']
})
export class CustomerListViewComponent implements OnInit {
  pq;
  customers:CustomersServiceService[];
  constructor(private cus:CusService) { }

  ngOnInit() {
    this.cus.getCus().subscribe(x=>this.customers=x);
  }

}
