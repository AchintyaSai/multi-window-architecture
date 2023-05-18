import { Component, OnInit } from '@angular/core';
import { WindowCommonService } from 'src/app/services/window-common.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  constructor(private winCommService : WindowCommonService){

  }
  ngOnInit(): void {
  }

  openWindow(windowType : string)
  {
    this.winCommService.openWindow(windowType)
  }

  closeWindow(windowTYpe : string){
    this.winCommService.closeWindows(windowTYpe)
  }

  closeAllWindows()
  {
    this.winCommService.closeWindows()
  }

  sendData(windowType : string)
  {
    this.winCommService.resendToChild(windowType, "From Parent -> "+windowType)
  }
}
