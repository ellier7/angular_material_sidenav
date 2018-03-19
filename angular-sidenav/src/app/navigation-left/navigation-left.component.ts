import { Component, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from "@angular/flex-layout";

import { SidenavService } from '../services/sidenav.service';
import { Subscription } from 'rxjs/Subscription';
import { NavigationTopComponent } from '../navigation-top/navigation-top.component';

@Component({
  selector: 'app-navigation-left',
  templateUrl: './navigation-left.component.html',
  styleUrls: ['./navigation-left.component.css'],
})

export class NavigationLeftComponent implements OnInit {
  sections = this.sidenavService.sections
  subscription: Subscription;

  toggledMenu: boolean;
  container_wrapper: string;
  opened: boolean;


  constructor(
    private sidenavService: SidenavService, 
    private topNav: NavigationTopComponent
  ) { }

  toggleMenu(brand) {
    this.sidenavService.toggleMenu(brand);
  }

  toggleOpen(index: number) {
    this.sidenavService.toggleSelectSection(index);
  }

  toggled() {
    this.topNav.toggled()
  }


  ngOnInit(): void {
    this.toggledMenu = false;
    this.container_wrapper = 'container_wrapper'
    this.opened = true;

    this.subscription = this.sidenavService.menuToggle.subscribe(
      status => {
        this.opened = status;
      });

    this.subscription = this.sidenavService.containerClass.subscribe(
      status => {
        this.container_wrapper = status;
      });
  }

}
