import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LocationStrategy, HashLocationStrategy, CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

import ru from '@angular/common/locales/ru';
import {registerLocaleData} from '@angular/common';
import {NZ_ICONS, NzIconModule} from 'ng-zorro-antd/icon';
import {NZ_I18N, ru_RU} from 'ng-zorro-antd/i18n';
import {IconDefinition} from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

registerLocaleData(ru);
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import {AppComponent} from './app.component';

// Import containers
import {DefaultLayoutComponent} from './containers';

import {P404Component} from './views/error/404.component';
import {P500Component} from './views/error/500.component';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import {AppRoutingModule} from './app.routing';

// Import 3rd party components
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ChartsModule} from 'ng2-charts';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import {NzNotificationModule, NzTreeModule} from "ng-zorro-antd";
import {SidebarNavigationComponent} from "./containers/default-layout/sidebar-navigation/sidebar-navigation.component";
import {BreadcrumbsComponent} from "./containers/default-layout/breadcrumbs/breadcurmbs-component";
import {DynamicMenuServiceInterceptor} from "./services/dynamic-menu-service-interceptor";
import {FormLoaderComponent} from "./containers/form-loader/form-loader.component";
import {MenuComponent} from "./menu/menu.component";
import {NzTableModule} from "ng-zorro-antd/table";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {SharedModule} from "./shared/shared.module";
import {AgGridModule} from "ag-grid-angular";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpClientModule,
    HttpModule,
    NzTreeModule,
    NzIconModule,
    NzTableModule,
    NzNotificationModule,
    ScrollingModule,
    DragDropModule,
    SharedModule,
    CommonModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    SidebarNavigationComponent,
    BreadcrumbsComponent,
    FormLoaderComponent,
    MenuComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {provide: NZ_I18N, useValue: ru_RU}, {provide: NZ_ICONS, useValue: icons},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DynamicMenuServiceInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
