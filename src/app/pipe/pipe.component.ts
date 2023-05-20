import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  title="Ame pipe not rfl pipe"
  today=new Date();
  todaydate=new Date();
  jsonval={name:'Roy',age:'25',address:{a1:'Dhaka',a2:'Gazipur'}};
  months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','oct', 'Nov','dec']
}
