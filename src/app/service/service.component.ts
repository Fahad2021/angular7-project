import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  todaydate: any;
  newcomponent="Enter new component create"

  constructor(private myservice:MyserviceService){}
  ngOnInit(){
    this.todaydate = this.myservice.showTodayDate();
  } 

}
