import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import Card from '../card.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edita-card',
  templateUrl: './edita-card.component.html',
  styleUrls: ['./edita-card.component.css']
})
export class EditaCardComponent implements OnInit {

  @Output() atualizaCardEvent = new EventEmitter<Card>();
  @Input() card: Card = new Card();
  @Input() icone = '';
  @Input() estilo: string = ''
  @Input() texto: string = ''
  @Input() desabilitaBotao: boolean = false;

  modalRef?: BsModalRef<any>;
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

  get form() {
    return this.formulario?.controls;
  }

  atualizaCard() {
    this.modalRef?.hide();
    const card = this.formulario?.getRawValue() as Card;
    this.atualizaCardEvent.emit(card)
  }

  abrirModal(template: TemplateRef<any>) {
    this.formulario?.patchValue(this.card);
    this.modalRef = this.modalService.show(template)
  }

}
