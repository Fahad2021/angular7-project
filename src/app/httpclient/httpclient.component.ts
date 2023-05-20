import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent {
  title="Angular Data load,get Httpclient"
  public persondata:any=[];
  constructor(private myservice:MyserviceService){}
  ngOnInit() {
    this.myservice.getData().subscribe((data:any) => { 
      this.persondata = Array.from(Object.keys(data), k=>data[k]); 
      console.log(this.persondata); 
      
    })
  }


}
