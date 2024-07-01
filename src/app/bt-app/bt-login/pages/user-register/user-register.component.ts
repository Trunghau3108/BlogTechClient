import { Component } from '@angular/core';
import { HeaderComponent } from '../../../bt-layout/components/header/header.component';
import { UserControlComponent } from '../../shared/components/user-control/user-control.component';
import { FooterComponent } from '../../../bt-layout/components/footer/footer.component';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [HeaderComponent,UserControlComponent,FooterComponent],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})
export class UserRegisterComponent {

}
