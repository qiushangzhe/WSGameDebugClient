import { ApiService } from './../service/api.service';
import { StorageService } from './../service/storage.service';
import { CommonService } from './../service/common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'component-connect-page',
  templateUrl: './connect-page.component.html',
  styleUrls: ['./connect-page.component.scss']
})
export class ConnectPageComponent implements OnInit {
  ip = '';
  protol = 'ws://';
  isLocalhost = false;
  port = '';
  playerChoose = 1;

  connectClicked = false;
  constructor(
    public api: ApiService,
    public common: CommonService,
    public storage: StorageService,
    public router: Router
  ) { }

  ngOnInit() {
    this.port = this.storage.get('port') || '';
    this.ip = this.storage.get('ip') || '';
  }

  clickLocalHost() {
    if (this.isLocalhost) {
      this.ip = '127.0.0.1';
    } else {
      this.ip = '';
    }
  }

  connect() {
    if (this.ip === '' || this.port === '') {
      this.common.errorTips('信息不全，连接操作禁止');
      return;
    }
    this.connectClicked = true;
    this.api.getWebSocketHandle(`${this.protol}${this.ip}:${this.port}`, () => {
      this.connectClicked = false;
    });
    this.api.bindOpenEvent(() => {
      this.connectClicked = false;
      this.common.tips('连接创建成功');
      this.router.navigate(['message']);
      this.api.isconnect = true;
      this.api.sendData({
        type: 900,
        data: {
          userid: this.playerChoose
        }
      });
      this.api.sendData({
        type: 1000
      });
    });

    // const msg = `<h3>当前连接:${this.protol}${this.ip}:${this.port}</h3>`;
    // this.common.dialog({
    //   title: '确认信息',
    //   content: msg,
    //   onOk: () => {
    //     console.log('连接');
    //     this.connectClicked = true;
    //     this.api.getWebSocketHandle(`${this.protol}${this.ip}:${this.port}`, () => {
    //       this.connectClicked = false;
    //     });

    //   }
    // });


  }
  // 设置默认端口
  setDefaultPort() {
    if (this.port === '') {
      this.common.errorTips('端口没填吧？');
      return;
    }
    this.storage.set('port', this.port);
    this.common.tips('port设置成功！！');
  }

  // 设置默认ip信息
  setDefaultIp() {
    this.storage.set('ip', this.ip);
    this.common.tips('ip设置成功！！');
  }

  saveConfig() {
    if (this.ip === '' || this.port === '') {
      this.common.errorTips('信息没填全');
      return;
    }
    this.setDefaultPort();
    this.setDefaultIp();
  }

}
