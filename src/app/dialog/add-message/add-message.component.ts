import { MessageService } from './../../service/message.service';
import { Component, OnInit } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
@Component({
  selector: 'component-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss']
})
export class AddMessageComponent implements OnInit {
  name;
  body;
  constructor(
    public message:MessageService,
    public subject:NzModalSubject
  ) { }

  ngOnInit() {
  }


  create(){
    this.message.addNewMessage(this.name,this.body);
    this.subject.next('flush');
    this.subject.destroy('onCancel');
  }
}
