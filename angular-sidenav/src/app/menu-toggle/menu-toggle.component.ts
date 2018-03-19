import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { NavigationLeftComponent } from '../navigation-left/navigation-left.component';


@Component({
  selector: 'app-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.css'],
})
export class MenuToggleComponent implements OnInit {

  @Input() sections;
  @Input() index;
  step;

  constructor(private navigationLeft: NavigationLeftComponent) { }

  setStep(index: number) {
    this.navigationLeft.toggleOpen(index)
  }

  ngOnInit() {

  }

}