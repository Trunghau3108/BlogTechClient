import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { Router } from '@angular/router';
import { LoginApiService } from '../../services/login-api.service';
import { RouterModule } from '@angular/router';
import { DTOUser } from '../../dto/DTOUser.dto';
import { Ps_UtilObjectService } from '../../../../../bt-lib/utilities/utility.object';

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

  onLogin(){
    if(!Ps_UtilObjectService.hasValueString(this.user.email)){
      alert("Bạn chưa nhập vào Email Address")
    }else if(!Ps_UtilObjectService.hasValueString(this.user.password)){
      alert("Bạn chưa nhập vào Password")
    }else{
      this.APILogin(this.user)
    }
  }

  onRegister(){
    if(!Ps_UtilObjectService.hasValueString(this.user.fullName)){
      alert("Bạn chưa nhập vào Name")
    }else if(!Ps_UtilObjectService.hasValueString(this.user.email)){
      alert("Bạn chưa nhập vào Email Address")
    }else if(!Ps_UtilObjectService.hasValueString(this.user.password)){
      alert("Bạn chưa nhập vào Password")
    }else if(!Ps_UtilObjectService.hasValueString(this.confirmPassword)){
      alert("Bạn chưa nhập vào Confirm Password")
    }else if(this.user.password !== this.confirmPassword){
      alert("Password và ConfirmPass khác nhau !!!")
    }else{
      this.APIRegister(this.user)
    }
  }
 

  confirmPassword: string = ''
  user = new DTOUser();

  APIRegister(dto:DTOUser) {
    this.apiLoginService.Register(dto).subscribe((response: any) => {
      if(Ps_UtilObjectService.hasValue(response) && response === "Ok"){
        this.APILogin(dto);
      }
    }, (error: any) => {  
      console.error(error);
      if(Ps_UtilObjectService.hasListValue(error.error.errors.InvalidEmail)){
        alert(error.message + `:  ${error.error.errors.InvalidEmail}` )
      }
      else if(Ps_UtilObjectService.hasListValue(error.error.errors.DuplicateUserName)){
        alert(error.message + `:  ${error.error.errors.DuplicateUserName}` )
      }
    });
  }


  APILogin(dto:DTOUser) {
    this.apiLoginService.Login(dto).subscribe((response: any) => {
      if(Ps_UtilObjectService.hasValue(response)){
        this.APIGetUserDetails(response);
      }
    }, (error: any) => {
      console.error(error);
    });
  }

  APIGetUserDetails(dto:any) {
    this.apiLoginService.GetUserDetails(dto).subscribe((response: any) => {
      if(Ps_UtilObjectService.hasValue(response)){
       localStorage.setItem("user",JSON.stringify(response));
       this.router.navigate(['/'])
      }
    }, (error: any) => {
      console.error(error);
    });
  }
}
