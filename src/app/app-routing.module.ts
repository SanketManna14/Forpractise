import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';

import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'',component:ServersComponent


  },
  {
    path:'add',component:AdduserComponent

  },
  {

    path:'users',component:UsersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
