import {
  Router,
  ActivatedRoute,
  NavigationEnd
} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'component-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  _position = 'bottom';
  title = 'component';
  nowTabIndex = 0;
  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute
  ) {
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        if(event.url === '/message'){
          this.nowTabIndex = 1;
        }else if(event.url === '/connect'){
          this.nowTabIndex = 0;
        }else if(event.url === '/config'){
          this.nowTabIndex = 2;
        }
      }
    })
  }

  changeToConnect() {
    this.router.navigate(['connect']);
  }

  changeToMessage() {
    this.router.navigate(['message']);
  }
  
  changeToConfig(){
    this.router.navigate(['config']);
  }
}
