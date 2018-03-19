import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/filter';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SidenavService } from './services/sidenav.service';
// import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title = new BehaviorSubject<any>({});
  activeTitle = this.title.asObservable();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sidenav: SidenavService,
  ) { }


  ngOnInit() {
    //(ELLIE): get title of current active page name
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        let currentRoute = this.route.root;
        while (currentRoute.children[0] !== undefined) {
          currentRoute = currentRoute.children[0];
        }
        this.title.next(currentRoute.snapshot.data);
      })

    //open sidenav toggle to current page
    console.log("URL", this.sidenav.url)
    this.sidenav.openMenu(this.sidenav.url)
  }
}