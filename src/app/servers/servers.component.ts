import { Component, OnInit } from '@angular/core';

import {IServer} from '../../Model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

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


  constructor() { }

  //toggle : which alters the status
  toggle(id:number){
    //toggle the status of the servier with given ID
    //this.Servers[id].IsOnline=!this.Servers[id].IsOnline;
     let serverFoundIndex: number= this.Servers.findIndex(i=>i.ID==id);
     this.Servers[serverFoundIndex].IsOnline=!this.Servers[serverFoundIndex].IsOnline;
  }


  ngOnInit(): void {
    //toggle the functionality
  


  }

}
