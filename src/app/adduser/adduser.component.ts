import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  FormData:any={};

  constructor(public myutil:UtilityService) { }

  ngOnInit(): void {
  }

  submitForm(event){
    event.preventDefault();
    //console.log(event.target.email.value);
    //console.log(this.FormData);
    this.myutil.addUser(this.FormData);
    console.log("User Data submitted")
  }

}
