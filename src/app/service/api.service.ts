import { Router } from '@angular/router';
import { CommonService } from './common.service';
import { Injectable } from "@angular/core";
@Injectable()
export class ApiService {
    websocketHandle = null;
    isconnect = false;
    messageList = [];
    constructor(
        public common : CommonService,
        public router : Router){

    }

    getWebSocketHandle(port?,onerror?){
        if(this.websocketHandle === null){
            if(port === undefined){
                this.common.errorTips('端口没传');
                return null;
            }
            this.websocketHandle = new WebSocket(port);
            this.bindMessageEvent((msg)=>{
                this.messageList.push(msg.data);
            })

            this.bindCloseEvent(()=>{
                onerror();
                this.router.navigate(['connect']);
                this.isconnect = false;
                this.websocketHandle = null;
                this.common.errorTips('与服务器断开连接!!');
            })
        }
        return this.websocketHandle;
    }

    connectServer(port,open,on,close,error?){
        this.bindOpenEvent(open);
        this.bindCloseEvent(close);
        this.bindMessageEvent(on);
    }

    bindOpenEvent(func){
        this.websocketHandle.onopen = func;
    }

    bindCloseEvent(func){
        this.websocketHandle.onclose = func;
    }

    bindMessageEvent(func){
        this.websocketHandle.onmessage = func;
    }

    sendData(data:Object){
        this.websocketHandle.send(JSON.stringify(data));
    }


}