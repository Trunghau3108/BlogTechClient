import { RouterModule, Routes } from '@angular/router';
import { HomeGlobalComponent } from './bt-app/bt-home/pages/home-global/home-global.component';
import { BlogListComponent } from './bt-app/bt-home/pages/blog-list/blog-list.component';


export const routes: Routes = [
    { path: "", component: HomeGlobalComponent, title: "Trang chủ" },
    {path: "blogs",component: BlogListComponent, title: "Blogs", children: [],},
    // {path: "", title: "Blogs", children: [],},
    {
      path: '',
      loadChildren: () => import('./bt-app/bt-login/bt-login.module').then(m => m.BtLoginModule)
    },
    {
      path: '',
      loadChildren: () => import('./bt-app/bt-home/bt-home.module').then(m => m.BtHomeModule)
    },
   // { path: "Register", component: UserLoginComponent, title: "Register" },
];
