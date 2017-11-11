import { MjactionComponent } from './../dialog/mjaction/mjaction.component';
import { MessageService } from './../service/message.service';
import { ApiService } from './../service/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
@Component({
  selector: 'component-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.scss']
})
export class MessagePageComponent implements OnInit {
  messageList = this.message.getMessageList();
  selectMessage = null;
  @ViewChild('box') box;
  constructor(
    public api:ApiService,
    public message:MessageService,
    public modalServer:NzModalService
  ) { 

  }

  ngOnInit() {
      // this.contentBox.scrollTo(0,9999);
      
  }

  clearAllMessage(){
    this.api.messageList.length = 0;
  }

  scrollBottom(){
    this.box.nativeElement.scrollTop = this.box.nativeElement.scrollHeight
  }

  sendData(){
    if(this.selectMessage === null){
      return;
    }
    this.api.sendData(this.selectMessage);
    this.scrollBottom();
  }

  openMjActionPanel(){
      this.modalServer.open({
        title : '麻将debug操作',
        content : MjactionComponent,
        footer:false
      });
  }

  p1(){
    this.clearAllMessage();
    this.api.sendData(this.messageList[0].data);
    this.api.sendData(this.messageList[1].data);
  }

  p2(){
    this.clearAllMessage();
    this.api.sendData(this.messageList[2].data);
    this.api.sendData(this.messageList[1].data);
  }

  p3(){
    this.clearAllMessage();
    this.api.sendData(this.messageList[3].data);
    this.api.sendData(this.messageList[1].data);
  }

  p4(){
    this.clearAllMessage();
    this.api.sendData(this.messageList[4].data);
    this.api.sendData(this.messageList[1].data);
  }
}
