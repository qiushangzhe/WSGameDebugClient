export class CardModel{
    type;
    point;
    constructor(){
    }
}

export class CardListModel{
    group:Array<CardModel> = [];
    constructor(){
    }

    addCardModel(card:CardModel){
        this.group.push(card);
    }
}