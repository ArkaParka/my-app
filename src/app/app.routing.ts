import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Import Containers
import {DefaultLayoutComponent} from './containers';

import {P404Component} from './views/error/404.component';
import {P500Component} from './views/error/500.component';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {DynamicLayoutExampleComponent} from "./containers/form-loader/dynamic-layout-example/dynamic-layout-example.component";
import {FormLoaderComponent} from "./containers/form-loader/form-loader.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
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
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'grid-layout',
        component: DynamicLayoutExampleComponent
      },
      // обертка для отображения любой формы по параметрам
      {
        path: 'form-loader/:moduleKey/:configPath',
        component: FormLoaderComponent
      },
      { //вот тут менюшка
        path: 'staff-structure',
        loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
      },
      {
        path: 'datatable',
        loadChildren: () => import('./views/datatable/datatable.module').then(m => m.DatatableModule)
      },
      {
        path: 'input-grid',
        loadChildren: () => import('./views/input-grid/input-grid.module').then(m => m.InputGridModule)
      },
      {
        path: 'ag-grid',
        loadChildren: () => import('./views/ag-grid/grid.module').then(m => m.GridModule)
      },
      {
        path: 'formly',
        loadChildren: () => import('./views/formly/formly.module').then(m => m.FormlyModule)
      },
      {
        path: 'dynamic-form',
        loadChildren: () => import('./views/dynamic-form/dynamic-form.module').then(m => m.DynamicFormModule)
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
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
