import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

  public titulo = 'Task Manager';
  public novaTarefa = false;

  adicionarNovaTarefa() {
    this.novaTarefa = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
