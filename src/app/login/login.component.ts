import { Component, OnInit } from '@angular/core';
import { Customer } from '../login';
import { MapDataService } from '../map-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
customer:Customer = new Customer();

  constructor(private userValidation:MapDataService) { }

  ngOnInit() {
    
  }

changeValidation(){
  console.log(this.customer);
  this.userValidation.changeUserValidation(this.customer);
}
}
