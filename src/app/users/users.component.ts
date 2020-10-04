import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/Model';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  AllUsers : Array<IUser>

  constructor(public myutil:UtilityService) { }

  ngOnInit():void{
    this.myutil.getUsers()
    .subscribe(users=>
      {
        //@ts-ignore
        const filtarray =users.filter(i=>i.name!=undefined);
        this.AllUsers =filtarray;
        console.log(this.AllUsers);
      },err=>{
        console.log(err);
      }
      )
  }

}
