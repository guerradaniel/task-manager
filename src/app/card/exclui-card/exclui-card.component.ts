import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Card from '../card.model';

@Component({
  selector: 'app-exclui-card',
  templateUrl: './exclui-card.component.html',
  styleUrls: ['./exclui-card.component.css']
})
export class ExcluiCardComponent {

  @Input() index: number = 0;
  @Input() nomeCard: string = '';
  @Input() texto: string = '';
  @Input() icone: string = '';
  @Input() estilo: string = '';
  @Output() removeCardEvent = new EventEmitter<Number>();

  modalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }

  abrirModal(template: TemplateRef<Card>) {
    this.modalRef = this.modalService.show(template);
  }

  confirmar() {
    this.modalRef?.hide();
    this.removeCardEvent.emit(this.index);
  }

  cancelar() {
    this.modalRef?.hide();
  }

}
