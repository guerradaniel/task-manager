import { Component, Input, OnInit } from '@angular/core';
import Card from '../card/card.model';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {

  @Input() titulo: string = '';
  @Input() cards: Card[] = []

  adicionarNovaTarefa(card: Card) {
    this.cards.push(card as Card)
  }

  removeCard(indice: number) {
    this.cards.splice(indice as number, 1);
  }

}
