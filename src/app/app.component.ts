import { Component } from '@angular/core';
import {IServer} from '../Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is from TypeScript of App component';
  
  Servers :Array<IServer>=[
    {
      ID:1,
      Name :'ISmart460',
      Ram:4,
      IsOnline :true,
  
    },
    {
      ID:2,
      Name :'ISmart461',
      Ram:12,
      IsOnline :false,
  
    },
    {
      ID:3,
      Name :'ISmart462',
      Ram:16,
      IsOnline :true,
  
    },
    {
      ID:4,
      Name :'ISmart463',
      Ram:8,
      IsOnline :false,
  
    }
    ]


}
