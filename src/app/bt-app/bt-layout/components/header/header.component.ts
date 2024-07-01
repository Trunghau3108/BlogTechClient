import { Component } from '@angular/core';
import { MenusModule } from '@progress/kendo-angular-menu';
import { Router, RouterModule } from "@angular/router";
import { NgIf } from '@angular/common';
import { ButtonModule } from '@progress/kendo-angular-buttons';
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

constructor(private router: Router) {
  this.items = this.mapItems(router.config);
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
