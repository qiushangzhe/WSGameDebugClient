import { Router } from '@angular/router';
import { AddMessageComponent } from './../dialog/add-message/add-message.component';
import { NzModalService } from 'ng-zorro-antd';
import { MessageService } from './../service/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.scss']
})
export class ConfigPageComponent implements OnInit {
  selectedMessage = null;
  select = this.message.getMessageList();
  constructor(
    public message : MessageService,
    private confirmServ: NzModalService,
    private router :Router
  ) { }

  ngOnInit() {
    console.dir(this.message.getMessageList());
  }

  deleteMessage(){
    if(this.selectedMessage === null){
      return null;
    }
    this.message.deleteMessage(this.selectedMessage.desc);
    this.select = this.message.getMessageList();
    this.selectedMessage = null;
  }

  addMessage(){
    const handle = this.confirmServ.open({
      title:'添加新消息',
      content : AddMessageComponent,
      footer:false
    });
    handle.subscribe((result)=>{
      if(result === 'flush'){
        this.select = this.message.getMessageList();
      }
    })
  }
}
