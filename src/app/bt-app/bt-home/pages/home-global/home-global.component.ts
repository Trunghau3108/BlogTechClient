import { Component } from '@angular/core';
import { HeaderComponent } from '../../../bt-layout/components/header/header.component';
import { FooterComponent } from '../../../bt-layout/components/footer/footer.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { searchIcon,homeIcon,myspaceIcon,thumbUpOutlineIcon } from '@progress/kendo-svg-icons';
@Component({
  selector: 'app-home-global',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    InputsModule,
    DropDownsModule,
    ButtonsModule,
    IconsModule],
  templateUrl: './home-global.component.html',
  styleUrl: './home-global.component.scss'
})
export class HomeGlobalComponent {
  
  icons = { searchIcon: searchIcon ,myspace:myspaceIcon,home:homeIcon,thumb: thumbUpOutlineIcon};
  data = [{code:1,name:"Test"}]
}
