import { Routes } from '@angular/router';
import { HomeGlobalComponent } from './bt-app/bt-home/pages/home-global/home-global.component';

export const routes: Routes = [
    { path: "", component: HomeGlobalComponent, },
    {path: "", title: "Blogs", children: [],},
    {
      path: '',
      loadChildren: () => import('./bt-app/bt-login/bt-login.module').then(m => m.BdLoginModule)
    },

   // { path: "Register", component: UserLoginComponent, title: "Register" },
];
