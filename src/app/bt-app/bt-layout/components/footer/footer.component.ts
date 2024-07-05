import { Component } from '@angular/core';
import { IconsModule } from '@progress/kendo-angular-icons';
import { facebookIcon, twitterIcon, linkedinBoxIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  icons = { facebookIcon: facebookIcon ,twitterIcon: twitterIcon,linkedinIcon: linkedinBoxIcon};
}
