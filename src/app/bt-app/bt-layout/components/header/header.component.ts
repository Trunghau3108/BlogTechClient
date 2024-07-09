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
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChild("anchor", { read: ElementRef }) public anchor!: ElementRef;
  @ViewChild("popup", { read: ElementRef }) public popup!: ElementRef;

  //Xử lý việc click ra khỏi popup thì sẽ đóng
  @HostListener("document:keydown", ["$event"])
  public keydown(event: KeyboardEvent): void {
    if (event.code === "Escape") {
      this.onTogglePopupUser(false);
    }
  }

  @HostListener("document:click", ["$event"])
  public documentClick(event: KeyboardEvent): void {
    if (event.target) {
      if (!this.contains(event.target)) {
        this.onTogglePopupUser(false);
      }
    }
  }
  //end
  
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


ngOnInit(){
  this.getUserLocal();
}



//#RegionHandle
onTogglePopupUser(show?: boolean): void{
  this.showPopupUser = show !== undefined ? show : !this.showPopupUser;
}

contains(target: EventTarget): boolean {
  return (
    this.anchor?.nativeElement.contains(target) ||
    (this.popup ? this.popup?.nativeElement.contains(target) : false)
  );
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

//#endRegion

//getuser
user = new DTOUser();
getUserLocal(){
  if (isPlatformBrowser(this.platformId)) {
    var userLS = localStorage.getItem('user');
    this.user = userLS ? JSON.parse(userLS) : null;
  }
}

}
