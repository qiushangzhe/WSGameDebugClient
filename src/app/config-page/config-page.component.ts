import { Router } from '@angular/router';
import { AddMessageComponent } from './../dialog/add-message/add-message.component';
import { NzModalService } from 'ng-zorro-antd';
import { MessageService } from './../service/message.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'angular4-jsoneditor/jsoneditor/jsoneditor.component';
@Component({
  selector: 'component-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.scss']
})
export class ConfigPageComponent implements OnInit {
  selectedMessage = null;
  _flush = false;
  select = this.message.getMessageList();
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;
  public editorOptions: JsonEditorOptions;
  constructor(
    public message : MessageService,
    private confirmServ: NzModalService,
    private router :Router
  ) { 
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code','view'];
    this.editorOptions.history = false;
    this.editorOptions.search = false;
  }

  ngOnInit() {

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

  flush(event){
    this._flush = !event;
  }
}
