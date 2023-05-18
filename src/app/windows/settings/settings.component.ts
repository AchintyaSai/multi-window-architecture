import { Component, OnInit } from '@angular/core';
import { ChildWindowService } from 'src/app/services/child-window.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  autoMuck : boolean =  true;
  handStrength : boolean = true;
  
  constructor(private childWindow : ChildWindowService) { }

  ngOnInit(): void {
  }

  onUpdate(event : any)
  {
    let settingsObj = {
      autoMuck : this.autoMuck,
      handStrength : this.handStrength
    }

    this.childWindow.sendDataToParent.next({
      fromWindow : 'settings',
      data : settingsObj
    })
  }
}
