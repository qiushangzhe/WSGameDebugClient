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

  }

  pengCard(){

  }

  huCard(){

  }

  mingGang(){

  }

  anGang(){

  }

  buGang(){

  }

  getNowCard(){
    console.log(this.cardGroup.group); 
  }
}
