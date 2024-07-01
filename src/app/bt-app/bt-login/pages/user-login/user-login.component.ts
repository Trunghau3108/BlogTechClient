import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../bt-layout/components/header/header.component';
import { UserControlComponent } from '../../shared/components/user-control/user-control.component';
import { FooterComponent } from '../../../bt-layout/components/footer/footer.component';
@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [HeaderComponent,UserControlComponent,FooterComponent],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  constructor(
    // public apiLoginService: LoginApiService,
    private router: Router
  ){}
  ngOnInit(){
    // console.log(this.router)
  }

  // getForm(){
  //   if(this.router.url == '/Login'){
  //     this.isLoginForm = true
  //   }else{
  //     this.isLoginForm = false
  //   }
  // }


  // isLoginForm: boolean = true
  // cofirmPassword: string = ''
  // registerForm = {
  //   email: '',
  //   password: '',
  //   fullName: ''
  // };

  // loginForm = {
  //   email: '',
  //   password: ''
  // };

  // register() {
  //   this.apiLoginService.Register(this.registerForm).subscribe((response: any) => {
  //     console.log(response);
  //   }, (error: any) => {
  //     console.error(error);
  //   });
  // }

  // login() {
  //   this.apiLoginService.Login(this.loginForm).subscribe((response: any) => {
  //     console.log(response);
  //   }, (error: any) => {
  //     console.error(error);
  //   });
  // }
  // showLoginFrom(){
  //   this.isLoginForm = !this.isLoginForm
  // }
}
