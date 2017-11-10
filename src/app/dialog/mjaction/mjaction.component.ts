import { CardListModel, CardModel } from './../../model/card.model';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'component-mjaction',
  templateUrl: './mjaction.component.html',
  styleUrls: ['./mjaction.component.scss']
})
export class MjactionComponent implements OnInit {
  cardDataList = [
    { name: '一万', type: 0, point: 0 }, { name: '二万', type: 0, point: 1 }, { name: '三万', type: 0, point: 2 },
    { name: '四万', type: 0, point: 3 }, { name: '五万', type: 0, point: 4 }, { name: '六万', type: 0, point: 5 },
    { name: '七万', type: 0, point: 6 }, { name: '八万', type: 0, point: 7 }, { name: '九万', type: 0, point: 8 },
    { name: '一条', type: 1, point: 0 }, { name: '二条', type: 1, point: 1 }, { name: '三条', type: 1, point: 2 },
    { name: '四条', type: 1, point: 3 }, { name: '五条', type: 1, point: 4 },
    { name: '六条', type: 1, point: 5 }, { name: '七条', type: 1, point: 6 }, { name: '八条', type: 1, point: 7 },
    { name: '九条', type: 1, point: 8 }, { name: '一饼', type: 2, point: 0 }, { name: '二饼', type: 2, point: 1 },
    { name: '三饼', type: 2, point: 2 }, { name: '四饼', type: 2, point: 3 }, { name: '五饼', type: 2, point: 4 },
    { name: '六饼', type: 2, point: 5 }, { name: '七饼', type: 2, point: 6 }, { name: '八饼', type: 2, point: 7 },
    { name: '九饼', type: 2, point: 8 }, { name: '东风', type: 3, point: 0 }, { name: '南风', type: 3, point: 1 },
    { name: '西风', type: 3, point: 2 }, { name: '北风', type: 3, point: 3 }, { name: '红中', type: 4, point: 0 },
    { name: '发财', type: 4, point: 1 }, { name: '白板', type: 4, point: 2 }
  ];
  cardGroup = new CardListModel();
  constructor(public api: ApiService) { }

  ngOnInit() {
    this.cardGroup.addCardModel(new CardModel());
  }

  addCardToGroup(e?: MouseEvent) {
    this.cardGroup.addCardModel(new CardModel());
  }

  deleteCardToGroup() {
    this.cardGroup.group.pop();
  }

  drawCard() {
    this.getNowCard();
  }

  disCard() {

  }

  pengCard() {

  }

  huCard() {

  }

  mingGang() {

  }

  anGang() {

  }

  buGang() {

  }

  getNowCard() {
    console.log(this.cardGroup.group);
  }

  clickMj(mj) {
    this.cardGroup.group[0].point = mj.point;
    this.cardGroup.group[0].type = mj.type;
  }

  pass(){

  }
}
  