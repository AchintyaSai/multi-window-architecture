import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WIndowManage } from '../window-models/window-manager';

@Injectable({
  providedIn: 'root'
})
export class WindowCommonService {

  getDataFromChild = new Subject();

  constructor(private winManager: WIndowManage) {
    window.allWindows = new Map<string, any>();
    this.subscribeToGetEvent();
  }

  openWindow(windowType: string) {
    let windowRef: any;
    let features = "width=600px, height=600px"
    switch (windowType) {
      case 'settings':
        windowRef = this.winManager.open(windowType, windowType, features, true)
        break;
      default:
        windowRef = this.winManager.open(windowType, windowType, features, false)
        break;
    }
    setTimeout(() => {
      this.setEventToChildWindow(windowRef)
    }, 1000)
  }

  closeWindows(windowType = "all") {
    if (windowType == "all")
      window.allWindows.forEach(windowObj => {
        windowObj.close();
      })
    else
      this.winManager.closeWindowByType(windowType)
  }

  subscribeToGetEvent() {
    this.getDataFromChild.subscribe(resp => {
      this.resendToChild(resp)
    })
  }

  setEventToChildWindow(windowRef: Window) {
    //@ts-ignore
    windowRef['childWindow'].setData("Hello World");
    //@ts-ignore
    windowRef['childWindow'].subscribeToChild(this.getDataFromChild)
  }

  resendToChild(data: any, windowType = 'all') {
    switch (windowType) {
      case 'settings':
        let windowRef = window.allWindows.get(windowType);
        windowRef['childWindow'].setData(data);
        break;
      default:
        window.allWindows.forEach(win => {
          win['childWindow'].setData(data);
        })
        break;
    }
  }
}
