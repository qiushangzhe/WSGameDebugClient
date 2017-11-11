import { CardListModel, CardModel } from './../../model/card.model';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'component-mjaction',
  templateUrl: './mjaction.component.html',
  styleUrls: ['./mjaction.component.scss']
})
export class MjactionComponent implements OnInit {
  cardGroup = new CardListModel();
  constructor(public api : ApiService) { }

  ngOnInit() {
    this.cardGroup.addCardModel(new CardModel());
  }

  addCardToGroup(e?:MouseEvent){
    this.cardGroup.addCardModel(new CardModel());
  } 

  deleteCardToGroup(){
    this.cardGroup.group.pop();
  }

  drawCard(){
    this.getNowCard();
  }

  disCard(){
    console.log(this.getNowCard(0));
    this.api.sendData({
      type : 1001,
      data : this.getNowCard(0)
    })
  }

  pengCard(){
    this.api.sendData({
      type : 1002,
      data : this.getNowCard(0)
    })
  }

  huCard(){

  }

  mingGang(){
    this.api.sendData({
      type : 1004,
      data : this.getNowCard(0)
    })
  }

  anGang(){
    this.api.sendData({
      type : 1003,
      data : this.getNowCard(0)
    })
  }

  buGang(){
    this.api.sendData({
      type : 1005,
      data : this.getNowCard(0)
    })  
  }

  getNowCard(index?):CardModel{
    return this.cardGroup.group[index]; 
  }
}
