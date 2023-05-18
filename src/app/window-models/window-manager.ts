import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class WIndowManage{

    constructor()
    {
    }

    open(url : any,windowType : string, features : string, focusIfOpen : boolean){
        if(focusIfOpen){
            let existingWindow = window.allWindows.get(windowType);
            if(existingWindow && !existingWindow.closed){
                existingWindow.focus();
                return existingWindow;
            }
        }

        let windowRef = window.open(url, windowType, features);
        window.allWindows.set(windowType, windowRef)
        return windowRef;
    }

    closeWindowByType(windowType : string)
    {
        let windowRef = window.allWindows.get(windowType);
        windowRef.close();
        window.allWindows.delete(windowType)
    }
}