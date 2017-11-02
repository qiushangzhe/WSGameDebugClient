import { Injectable } from "@angular/core";
@Injectable()
export class StorageService {
    public localStorage:any;
    constructor() {
        if (!localStorage) {
            throw new Error('当前浏览器不支持LocalStorage，换个浏览器能死么');
        }
        this.localStorage = localStorage;
    }

    public set(key:string, value:string):void {
        this.localStorage[key] = value;
    }

    public get(key:string):string {
        return this.localStorage[key] || false;
    }

    public setObject(key:string, value:any):void {
        this.localStorage[key] = JSON.stringify(value);
    }

    public getObject(key:string):Array<any> {
        if(this.localStorage[key]){
            return JSON.parse(this.localStorage[key]);
        }else {
            return undefined;
        }
    }

    public remove(key:string):any {
        this.localStorage.removeItem(key);
    }
}