import { Component } from '@angular/core';
import { HeaderComponent } from '../../../bt-layout/components/header/header.component';
import { FooterComponent } from '../../../bt-layout/components/footer/footer.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { searchIcon,homeIcon,myspaceIcon,thumbUpOutlineIcon, chevronRightIcon } from '@progress/kendo-svg-icons';
import { Router, RouterModule } from "@angular/router";
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-home-global',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    InputsModule,
    DropDownsModule,
    ButtonsModule,
    IconsModule,
    RouterModule,NgFor],
  templateUrl: './home-global.component.html',
  styleUrl: './home-global.component.scss'
})
export class HomeGlobalComponent {
  icons = { searchIcon: searchIcon ,myspace:myspaceIcon,home:homeIcon,thumb: thumbUpOutlineIcon,right: chevronRightIcon};
  data = [{code:1,name:"Test"}]

  items = [
    { title: 'Item 1', image: 'bookInHand.jpg', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Item 2', image: 'bookInHand.jpg', content: 'Suspendisse varius enim in eros.' },
    { title: 'Item 3', image: 'bookInHand.jpg', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Item 4', image: 'bookInHand.jpg', content: 'Suspendisse varius enim in eros.' },
    { title: 'Item 5', image: 'bookInHand.jpg', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Item 6', image: 'bookInHand.jpg', content: 'Suspendisse varius enim in eros.' }
  ];
  
}
