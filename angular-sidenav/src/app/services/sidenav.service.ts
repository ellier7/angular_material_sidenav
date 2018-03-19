import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

@Injectable()
export class SidenavService {
  dashboard_open = true;
  pages_open = false;
  about_open = false;
  
  sections = [
    {
      name: 'Dashboard',
      type: 'link',
      icon: 'fa fa-dashboard',
      opened: this.dashboard_open,
      background: 'dashboard_link',
      title: 'menu_title'  
    },
    {
      name: 'Pages',
      type: 'toggle',
      icon: 'fa fa-list-ol',
      opened: this.pages_open,
      title: 'menu_title',
      pages: [
        {
          name: 'First Page',
          type: 'link',
          path: 'page/first',
          icon: 'fa fa-star',
          title: 'menu_link_title',
          background: 'menu-link-section'
        },
        {
          name: 'Second Page',
          type: 'link',
          path: 'page/second',
          icon: 'fa fa-star-o',
          title: 'menu_link_title',
          background: 'menu-link-section'
        },
        {
          name: 'Third Page',
          type: 'link',
          path: 'page/third',
          icon: 'fa fa-star-half-full',
          title: 'menu_link_title',
          background: 'menu-link-section'
        }
      ]
    },
    {
      name: 'About Us',
      type: 'toggle',
      icon: 'fa fa-user',
      opened: this.about_open,
      title: 'menu_title',
      pages: [
        {
          name: 'Contact',
          type: 'link',
          path: 'contact',
          icon: 'fa fa-phone',
          title: 'menu_link_title',
          background: 'menu-link-section'
        }
      ]
    }
  ]

  private toggled = new BehaviorSubject<boolean>(true);
  menuToggle = this.toggled.asObservable();

  private containerWrapper = new BehaviorSubject<string>('container_wrapper');
  containerClass = this.containerWrapper.asObservable();

  url: string;

  constructor(public location: Location) {
    this.location = location;
    this.url = this.location.path()
  }

  //(ELLIE): make sure only one toggled section is open at a time on sidenav
  toggleSelectSection(index: number) {
    Object.keys(this.sections).forEach(v => this.sections[v].opened = false)
    this.sections[index].opened = true
  }

  toggleMenu(brand) {
    this.toggled.next(brand);
  }

  getToggleStatus() {
    return this.toggled.value;
  }

  changeContainerClass(className) {
    this.containerWrapper.next(className);
  }

  getContainerClass() {
    return this.containerWrapper.value;
  }


  // (ELLIE): on app init, check URL so sidenav opens to show active page
  openMenu(path) {
    let checkPath = ""
    Object.keys(this.sections).forEach(v => {
      if (this.sections[v].type === 'toggle') {
        this.sections[v].pages.forEach((m, num) => {
          if (this.sections[v].pages[num].path != "") {
            checkPath = '/' + this.sections[v].pages[num].path
          }
          if (checkPath === path) {
            this.sections[v].opened = true;
            return;
          }
        })
      }
    })
  }

}