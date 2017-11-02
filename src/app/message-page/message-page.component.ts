import { MessageService } from './../service/message.service';
import { ApiService } from './../service/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';

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
    public message:MessageService
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
}
