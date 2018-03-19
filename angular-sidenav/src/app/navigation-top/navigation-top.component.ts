import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-navigation-top',
  templateUrl: './navigation-top.component.html',
  styleUrls: ['./navigation-top.component.css']
})
export class NavigationTopComponent implements OnInit {
  brands = [];
  showToggle: boolean;
  container_wrapper: string;
  showBrands: boolean;

  activeBrand: string;
  settings: Array<any> = [
    { icon: 'account_box', name: 'View Profile', route: '/profile' },
    { icon: 'power_settings_new', name: 'Log out', route: '' }
  ]

  constructor(
    private sidenavService: SidenavService, 
    private media: ObservableMedia) {
    this.media.subscribe((mediaChange: MediaChange) => {
      this.showToggle = this.getOpened(mediaChange);
      this.sidenavService.toggleMenu(this.showToggle)

      this.container_wrapper = (this.showToggle ? 'container_wrapper' : 'container_wrapper2')
      this.sidenavService.changeContainerClass(this.container_wrapper)
    });
  }


  toggleMenu(brand) {
    this.sidenavService.toggleMenu(brand);
  }

  // open/close as needed
  private getOpened(mediaChange: MediaChange): boolean {
    if (this.media.isActive('gt-sm')) {
      return true;
    } else {
      return false;
    }
  }


  toggled() {
    this.showToggle = this.sidenavService.getToggleStatus() ? false : true
    this.sidenavService.toggleMenu(this.showToggle)

    this.container_wrapper = this.sidenavService.getContainerClass() === 'container_wrapper' ? 'container_wrapper2' : 'container_wrapper'
    this.sidenavService.changeContainerClass(this.container_wrapper)
  }


  ngOnInit() {
    this.sidenavService.menuToggle.subscribe(
      status => {
        this.showToggle = status
      });

    this.container_wrapper = 'container_wrapper'

    this.sidenavService.containerClass.subscribe(
      status => {
        this.container_wrapper = status;
      });


  }

}
