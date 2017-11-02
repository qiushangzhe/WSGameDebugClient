import { MessageService } from './service/message.service';
import { StorageService } from './service/storage.service';
import { CommonService } from './service/common.service';
import { ApiService } from './service/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectPageComponent } from './connect-page/connect-page.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { MessagePageComponent } from './message-page/message-page.component';
import { ConfigPageComponent } from './config-page/config-page.component';
import { AddMessageComponent } from './dialog/add-message/add-message.component';
import { Ng4JsonEditorModule } from 'angular4-jsoneditor';
import { MjactionComponent } from './dialog/mjaction/mjaction.component' 
@NgModule({
  declarations: [
    AppComponent,
    ConnectPageComponent,
    MessagePageComponent,
    ConfigPageComponent,
    AddMessageComponent,
    MjactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    Ng4JsonEditorModule
  ],
  providers: [
    ApiService,
    CommonService,
    StorageService,
    MessageService
  ],
  entryComponents:[
    AddMessageComponent,
    MjactionComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
