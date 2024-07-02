import { Component, Inject,PLATFORM_ID } from '@angular/core';
import { MenusModule } from '@progress/kendo-angular-menu';
import { Router, RouterModule } from "@angular/router";
import { NgIf } from '@angular/common';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { DTOUser } from '../../../bt-login/shared/dto/DTOUser.dto';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenusModule,NgIf,RouterModule,ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public items: any[] = []
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
  @Inject(PLATFORM_ID) private platformId: Object
) {
  this.items = this.mapItems(router.config);
}

ngOnInit(){
  this.getUserLocal();
}

user = new DTOUser();
getUserLocal(){
  if (isPlatformBrowser(this.platformId)) {
    var userLS = localStorage.getItem('user');
    this.user = userLS ? JSON.parse(userLS) : null;
  }
}

logOut(){
  localStorage.removeItem("user");
  this.ngOnInit();
}

// convert the routes to menu items.
private mapItems(routes: any[], path?: string): any[] {
  return routes.map((item) => {
    // console.log(item)
    const result: any = {
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
