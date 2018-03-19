import { Component, OnInit, Input } from '@angular/core';
import { NavigationLeftComponent } from '../navigation-left/navigation-left.component';


@Component({
  selector: 'app-menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.css']
})
export class MenuLinkComponent implements OnInit {
  @Input() sections;
  
  constructor(private NavigationLeftComponent: NavigationLeftComponent) { }

  ngOnInit() {
  }

}
