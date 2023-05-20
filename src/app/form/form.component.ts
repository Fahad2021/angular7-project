import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title="Template Driven Form";
  title2="Reactive form";
  emailid: any;
  formdata:any;
  constructor(private myservice:MyserviceService){}
  ngOnInit() {
    this.formdata=new FormGroup({
      emailid:new FormControl ("",Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd:new FormControl ("",Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])) 
    });

  }
  // passwordvalidation(formcontrol:any) {
  //   if (formcontrol.value.length < 5) {
  //   return {"passwd" : true};
  //   }
  // }

  onClicksubmit(data:any){
    alert("Entered Email Id:" + data.emailid);
  }
  onClicksubmit2(data:any){this.emailid=data.emailid;}
}
