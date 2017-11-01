import { Injectable } from "@angular/core";
import { NzMessageService } from 'ng-zorro-antd';
import { NzModalService } from 'ng-zorro-antd';
@Injectable()
export class CommonService {
    constructor(
        private _message: NzMessageService,
        private confirmServ: NzModalService) {

    }

    tips(msg){
        this._message.info(msg,{nzDuration: 2000});
    }

    errorTips(msg){
        this._message.error(msg,{nzDuration: 2000});
    }

    warningTips(msg){
        this._message.warning(msg,{nzDuration: 2000});
    }

    dialog(config){
        this.confirmServ.info(config);
    }
}