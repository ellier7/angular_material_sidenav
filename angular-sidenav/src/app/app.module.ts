import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatMenuModule, MatListModule, MatExpansionModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavigationLeftComponent } from './navigation-left/navigation-left.component';
import { NavigationTopComponent } from './navigation-top/navigation-top.component';
import { SidenavService } from './services/sidenav.service';
import { MenuLinkComponent } from './menu-link/menu-link.component';
import { MenuToggleComponent } from './menu-toggle/menu-toggle.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'page/first',
    component: FirstComponent
  },
  {
    path: 'page/second',
    component: SecondComponent
  },
  {
    path: 'page/third',
    component: ThirdComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationLeftComponent,
    NavigationTopComponent,
    MenuLinkComponent,
    MenuToggleComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ContactComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [NavigationTopComponent, SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
