import { Component } from '@angular/core';
import { IconsModule } from '@progress/kendo-angular-icons';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { facebookIcon, twitterIcon, linkedinBoxIcon,chevronDownIcon } from '@progress/kendo-svg-icons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconsModule,ButtonsModule,DropDownsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  icons = { facebookIcon: facebookIcon ,
    twitterIcon: twitterIcon,
    linkedinIcon: linkedinBoxIcon,
    icDown:chevronDownIcon,
  };
  data = [{Code:1, Name: 'Tiếng Việt - VI'},{Code:2, Name: 'English - En'}]
}
