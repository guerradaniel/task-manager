import { Component } from '@angular/core';
import Card from './card/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-manager';

  tarefas = [
    {
      nome: 'Javascript',
      descricao: 'Melhorar os métodos de array',
      concluido: true
    },
    {
      nome: 'React',
      descricao: 'Estudar controle de estados',
      concluido: false

    }
  ];

  cards: Card[] = [];

  ngOnInit(): void {

    this.tarefas.forEach((t) => {
      let card = new Card();
      card.nome = t.nome;
      card.descricao = t.descricao;
      card.concluido = t.concluido;
      this.cards.push(card);
    });
  }


}
