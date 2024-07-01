import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from '../bt-login/pages/user-login/user-login.component';

const routes: Routes = [
  { path: "login", component: UserLoginComponent, title: "Login" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BdHomeRoutingModule { }