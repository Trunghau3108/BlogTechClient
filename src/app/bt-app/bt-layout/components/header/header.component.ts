import { Component, ElementRef, HostListener, Inject,PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { MenusModule } from '@progress/kendo-angular-menu';
import { Router, RouterModule } from "@angular/router";
import { NgIf,DOCUMENT } from '@angular/common';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { DTOUser } from '../../../bt-login/shared/dto/DTOUser.dto';
import { isPlatformBrowser,Location  } from '@angular/common';
import { LayoutModule } from "@progress/kendo-angular-layout";
import { SVGIcon, userIcon,bellIcon,logoutIcon } from "@progress/kendo-svg-icons";
import { PopupModule } from '@progress/kendo-angular-popup';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenusModule,NgIf,RouterModule,ButtonModule,LayoutModule,PopupModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('anchor') anchor!: ElementRef;
  @ViewChild('popup') popup!: ElementRef;
  
  public items: any[] = []
  userSvg: SVGIcon = userIcon;
  bellSvg: SVGIcon = bellIcon;
  logout: SVGIcon = logoutIcon;
  showPopupUser = false;

  margin = { horizontal: -260, vertical: 25 };

//    = [
//     {
//         text: 'Home',
       
//     },
//     {
//         text: 'Blog',
//         items: [{ text: 'Item1.1' }, { text: 'Item1.2', items: [{ text: 'Item1.2.1' }] }]
//     },
//     {
//       icon:'k-i-user',
//       items: [{ text: 'SignIn' }, { text: 'SignUp' }]
//   },
// ];


constructor(private router: Router,
  @Inject(PLATFORM_ID) private platformId: Object,
  @Inject(DOCUMENT) private document: Document,
  private renderer: Renderer2,
  private location: Location
) {
  this.items = this.mapItems(router.config);
}

//todo - click outside with popup
// ngAfterViewInit() {
//   this.renderer.listen('document', 'click', this.handleOutsideClick.bind(this));
// }

// ngOnDestroy() {
//   this.renderer.listen('document', 'click', this.handleOutsideClick.bind(this));
// }
// handleOutsideClick(event: MouseEvent) {
//   if (!this.popup.nativeElement.contains(event.target) &&!this.anchor.nativeElement.contains(event.target)) {
//     this.showPopupUser = false;
//   }
// }

ngOnInit(){
  this.getUserLocal();
}




onTogglePopupUser(){
  this.showPopupUser = !this.showPopupUser
}

//getuser
user = new DTOUser();
getUserLocal(){
  if (isPlatformBrowser(this.platformId)) {
    var userLS = localStorage.getItem('user');
    this.user = userLS ? JSON.parse(userLS) : null;
  }
}

logOut(){
  localStorage.removeItem("user");
  window.location.reload();
}

// convert the routes to menu items.
private mapItems(routes: any[], path?: string): any[] {
  return routes.map((item) => {
    // console.log(item)
    const result: any = {
      //lấy tittle từ app.routers
      title: item.title,
      path: (path ? `${path}/` : "") + item.path,
    };

    if (item.children) {
      result.items = this.mapItems(item.children, item.path);
    }
    // console.log(result)
    return result;
  });
}

}
