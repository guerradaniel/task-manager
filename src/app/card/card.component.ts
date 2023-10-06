import { Component, EventEmitter, Input, Output } from '@angular/core';

import Card from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() card: Card = new Card();
  @Input() index: number = 0;
  @Output() notificaCardExcluidoEvent = new EventEmitter<number>();
  @Output() updateChecklistEvent = new EventEmitter<boolean>();

  atualizaCard(card: Card) {
    this.card = card;
  }

  removeCard(index: any) {
    this.notificaCardExcluidoEvent.emit(index as number);
  }

  updateCheckList() {
    this.card.concluido = (!this.card.concluido);
    this.updateChecklistEvent.emit(this.card.concluido);
  }


}
