import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { CardComponent } from './card/card.component';
import { NovoCardComponent } from './card/novo-card/novo-card.component';
import { EditaCardComponent } from './card/edita-card/edita-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent,
    CardComponent,
    NovoCardComponent,
    EditaCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
