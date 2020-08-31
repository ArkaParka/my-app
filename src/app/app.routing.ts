import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Import Containers

import {P404Component} from './views/error/404.component';
import {P500Component} from './views/error/500.component';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {FormLoaderComponent} from "./containers/form-loader/form-loader.component";
import {ModuleHomePageComponent} from "./containers/module-home-page/module-home-page.component";
import {SkeletonComponent} from "./containers";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app/home',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'app',
    component: SkeletonComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'module/:moduleKey',
        component: ModuleHomePageComponent
      },
      {
        path: ':module/:moduleKey/:configPath',
        component: FormLoaderComponent
      },
    ]
  },
  {path: '**', component: P404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
