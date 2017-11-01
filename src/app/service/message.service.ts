import { StorageService } from './storage.service';
import { CommonService } from './common.service';
import { Injectable } from "@angular/core";

@Injectable()
export class MessageService {
    constructor(public common:CommonService,public storage:StorageService){

    }

    addNewMessage(describe,msg) {
        let list = this.storage.getObject('message') || [];
        let buffer = {
            desc : describe,
            data : msg
        }
        list.push(buffer);
        this.storage.setObject('message',list);
    }  
    
    getMessageList(){
        let list = this.storage.getObject('message');
        return list || [];
    }

    deleteMessage(desc){
        console.log(desc);
        let list = this.storage.getObject('message');
        for(let i in list){
            if(list[i].desc === desc){
                list.splice(i,1);
                break;
            }
        }
        this.storage.setObject('message',list);
    }

}