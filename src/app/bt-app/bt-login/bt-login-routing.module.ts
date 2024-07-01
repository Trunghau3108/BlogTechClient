import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { UserForgotPasswordComponent } from './pages/user-forgot-password/user-forgot-password.component';

const routes: Routes = [
  {
    path: "login",
    component: UserLoginComponent
  },
  {
    path: "register",
    component: UserRegisterComponent
  },
  {
    path: "forgotpassword",
    component: UserForgotPasswordComponent
  },
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BtLoginRoutingModule { }
