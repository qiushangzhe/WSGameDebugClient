import { MessageService } from './../../service/message.service';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import { JsonEditorComponent, JsonEditorOptions } from 'angular4-jsoneditor/jsoneditor/jsoneditor.component';
@Component({
  selector: 'component-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss']
})
export class AddMessageComponent implements OnInit {
  name;
  public body: any = {
    type : '类型',
    data : {

    }
  }
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;
  public editorOptions: JsonEditorOptions;
  constructor(
    public message: MessageService,
    public subject: NzModalSubject
  ) { 
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
  }

  ngOnInit() {
    // this.editor.setMode('tree');
  }


  create() {
    this.body = this.editor.get();
    this.message.addNewMessage(this.name, this.body);
    this.subject.next('flush');
    this.subject.destroy('onCancel');
  }
}
