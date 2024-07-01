import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { Router } from '@angular/router';
import { LoginApiService } from '../../services/login-api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-control',
  standalone: true,
  imports: [FormsModule,NgIf,InputsModule,ButtonModule,RouterModule],
  templateUrl: './user-control.component.html',
  styleUrl: './user-control.component.scss'
})
export class UserControlComponent {
  @Input() isRegisterForm: boolean = false
  @Input() isForgotForm: boolean = false
  @Input() isLoginForm: boolean = false

  constructor(
    public apiLoginService: LoginApiService,
    private router: Router
  ){}

  ngAfterViewInit(){
    // var ourImage = new Image();
    // ourImage.id='irimg';
  }
  ngOnInit(){
  }

 

  cofirmPassword: string = ''
  registerForm = {
    email: '',
    password: '',
    fullName: ''
  };

  loginForm = {
    email: '',
    password: ''
  };

  register() {
    this.apiLoginService.Register(this.registerForm).subscribe((response: any) => {
      console.log(response);
    }, (error: any) => {
      console.error(error);
    });
  }

  login() {
    this.apiLoginService.Login(this.loginForm).subscribe((response: any) => {
      console.log(response);
    }, (error: any) => {
      console.error(error);
    });
  }
  showLoginFrom(){
    this.isLoginForm = !this.isLoginForm
  }
}
