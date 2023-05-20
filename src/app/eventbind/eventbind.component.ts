import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css'],
})
export class EventbindComponent {
  months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  isaviable = false;

  myClickEvent(event: any) {
    alert('clicke the button');
    console.log(event);
  }
  changemonths(event: any) {
    alert('changemonths the dropdowan');
    console.log(event);
    
  }
}
