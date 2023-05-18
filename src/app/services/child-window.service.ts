import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildWindowService {

  public sendDataToParent = new Subject();
  self = window;
  constructor() { 

    //@ts-ignore
    this.self['childWindow'] = {
      setData : this.setData.bind(this),
      subscribeToChild : this.subscribeToChild.bind(this) 
    }
  }

  setData(dataFromParent : any)
  {
    console.log(dataFromParent)
  }

  subscribeToChild(getDataFromChild : Subject<any>){
    this.sendDataToParent = getDataFromChild;
  }
}

