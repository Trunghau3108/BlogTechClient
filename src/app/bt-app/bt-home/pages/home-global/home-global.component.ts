import { Component } from '@angular/core';
import { HeaderComponent } from '../../../bt-layout/components/header/header.component';
@Component({
  selector: 'app-home-global',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home-global.component.html',
  styleUrl: './home-global.component.scss'
})
export class HomeGlobalComponent {

}
