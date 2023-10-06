import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Card from '../card.model';

@Component({
  selector: 'app-card-admin',
  templateUrl: './card-admin.component.html',
  styleUrls: ['./card-admin.component.css']
})
export class CardAdminComponent implements OnInit {

  @Input() estilo: string = '';
  @Input() texto: string = '';
  @Input() card: Card = new Card();
  @Input() icone = '';
  @Input() desabilitaBotao: boolean = false;
  @Output() atualizaCardEvent = new EventEmitter<Card>();
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
    });
  }

  abrirModalNovo(template: TemplateRef<Card>) {
    this.formulario.reset();
    this.modalRef = this.modalService.show(template);
  }

  salvar() {
    this.modalRef?.hide();
    const card = this.formulario.getRawValue() as Card;
    this.novoCartaoEvent.emit(card);
  }

  atualizaCard() {
    this.modalRef?.hide();
    const card = this.formulario?.getRawValue() as Card;
    this.atualizaCardEvent.emit(card);
  }

  abrirModalEdicao(template: TemplateRef<Card>) {
    this.formulario?.patchValue(this.card);
    this.modalRef = this.modalService.show(template);
  }
}
