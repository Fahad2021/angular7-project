import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  title="This is data BindingComponent"
  months=['jan', 'feb', 'mar', 'apr', 'may','jun', 'jul', 'aug', 'sep','oct', 'nov','dec'];
  isaviable=false;

}
