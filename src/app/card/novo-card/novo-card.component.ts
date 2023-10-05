import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import Card from '../card.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-card',
  templateUrl: './novo-card.component.html',
  styleUrls: ['./novo-card.component.css']
})
export class NovoCardComponent implements OnInit {

  @Input() estilo: string = '';
  @Input() texto: string = '';
  @Output() novoCartaoEvent = new EventEmitter<Card>();

  modalRef?: BsModalRef;
  formulario: FormGroup = new FormGroup({});

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      descricao: [null, Validators.required],
      concluido: [null]
    })
  }

  abrirModal(template: TemplateRef<any>) {
    this.formulario.reset();
    this.modalRef = this.modalService.show(template);
  }

  salvar() {
    this.modalRef?.hide();
    const card = this.formulario.getRawValue() as Card;
    this.novoCartaoEvent.emit(card)
  }

}
