import { RouterModule, Routes } from '@angular/router';
import { HomeGlobalComponent } from './bt-app/bt-home/pages/home-global/home-global.component';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
    { path: "", component: HomeGlobalComponent, },
    {path: "", title: "Blogs", children: [],},
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
