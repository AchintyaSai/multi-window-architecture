import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { WindowCommonService } from './services/window-common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multi-window-architecture';

  constructor(private router : Router, private winCOmmService : WindowCommonService){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart){
        this.winCOmmService.closeWindows();
      }
    })
  }
}
