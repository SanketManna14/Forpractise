import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IUser } from 'src/Model';


@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(public myHttp:HttpClient) { }

  getUsers(){

    return this.myHttp.get('https://mycrudops.herokuapp.com/users');

  }
  //add the user
  addUser(user:IUser){
    this.myHttp
        .post('https://mycrudops.herokuapp.com/users',user)
        .subscribe(data=>{
          //success scenario
          console.log(data);
          console.log('User added successfully');
        },err=>{
          //in the failure scenario
          console.log(err);
        });
  }

  updateUser(user:IUser){
    /*this.myHttp.put(`https://mycrudops.herokuapp.com/users/${user.id}`,user)
                 .subscribe(data=>{
                   console.log('Details have been updated.')
                 },err=>{
                   console.log(err);
                 });*/
  }
  deleteUser(id:number){
     /*this.myHttp.delete(`https://mycrudops.herokuapp.com/users/${user.id}`)
                 .subscribe(data=>{
                   console.log('Details have been wiped off.')
                 },err=>{
                   console.log(err);
                 });*/

  }
}
