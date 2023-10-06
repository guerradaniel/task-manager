import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { CardComponent } from './card/card.component';
import { ExcluiCardComponent } from './card/exclui-card/exclui-card.component';
import { CardAdminComponent } from './card/novo-card/card-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent,
    CardComponent,
    CardAdminComponent,
    ExcluiCardComponent
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
