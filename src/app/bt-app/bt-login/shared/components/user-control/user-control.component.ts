import { Component, HostBinding, Input,ViewEncapsulation  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { InputType, InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { Router } from '@angular/router';
import { LoginApiService } from '../../services/login-api.service';
import { RouterModule } from '@angular/router';
import { DTOUser } from '../../dto/DTOUser.dto';
import { Ps_UtilObjectService } from '../../../../../bt-lib/utilities/utility.object';
import { LabelModule } from "@progress/kendo-angular-label";
import { IconsModule } from "@progress/kendo-angular-icons";
import { envelopeIcon,eyeIcon,userIcon  } from "@progress/kendo-svg-icons";
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { LoadingSpinnerComponent } from '../../../../bt-layout/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-user-control',
  standalone: true,
  imports: [FormsModule,NgIf,InputsModule,ButtonModule,RouterModule,LabelModule,IconsModule,IndicatorsModule,LoadingSpinnerComponent],
  templateUrl: './user-control.component.html',
  styleUrl: './user-control.component.scss',
  // encapsulation: ViewEncapsulation.None,
})
export class UserControlComponent {
  @Input() isRegisterForm: boolean = false
  @Input() isForgotForm: boolean = false
  @Input() isLoginForm: boolean = false

  icons = {
     evenlope: envelopeIcon,
     eye:eyeIcon,
     user:userIcon
  };
  textboxTypePw: InputType = "password";
  textboxTypePwConfirm: InputType = "password";
  isLoading:boolean = false
  constructor(
    public apiLoginService: LoginApiService,
    private router: Router
  ){}
  @HostBinding('class.kendo-loader-overlay')
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


  //check email
  hasValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  //show password
  onClickShowPassword(isConfirm: boolean = false) {
    if (isConfirm) {
      this.textboxTypePwConfirm = this.textboxTypePwConfirm === "password"? "text" : "password";
    } else {
      this.textboxTypePw = this.textboxTypePw === "password"? "text" : "password";
    }
  }
 
 

  confirmPassword: string = ''
  user = new DTOUser();

  APIRegister(dto:DTOUser) {
    this.isLoading = true
    this.apiLoginService.Register(dto).subscribe((response: any) => {
      if(Ps_UtilObjectService.hasValue(response) && response === "Thành công"){
        this.APILogin(dto);
      }
      this.isLoading = false
    }, (error: any) => {  
      this.isLoading = false
      console.error(error);
      if(Ps_UtilObjectService.hasListValue(error.error.errors.InvalidEmail)){
        alert(error.message + `:  ${error.error.errors.InvalidEmail}` )
      }
      else if(Ps_UtilObjectService.hasListValue(error.error.errors.DuplicateUserName)){
        alert(error.message + `:  ${error.error.errors.DuplicateUserName}` )
      }
      else if(Ps_UtilObjectService.hasListValue(error.error.errors.PasswordTooShort)){
        alert(error.message + `:  ${error.error.errors.PasswordTooShort}` )
      }
    });
  }


  APILogin(dto:DTOUser) {
    this.isLoading = true
    this.apiLoginService.Login(dto).subscribe((response: any) => {
      if(Ps_UtilObjectService.hasValue(response)){
        this.APIGetUserDetails(response);
      }
      this.isLoading = false
    }, (error: any) => {
      this.isLoading = false
      console.error(error);
      alert(error.message + `:  ${error.error.message}` )
      
     
    });
  }

  APIGetUserDetails(dto:any) {
    this.isLoading = true
    this.apiLoginService.GetUserDetails(dto).subscribe((response: any) => {
      if(Ps_UtilObjectService.hasValue(response)){
       localStorage.setItem("user",JSON.stringify(response));
       this.router.navigate(['/'])
      }
      this.isLoading = false
    }, (error: any) => {
      this.isLoading = false
      console.error(error);
    });
  }
}
