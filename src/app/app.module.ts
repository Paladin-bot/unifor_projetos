import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PlanilhaComponent } from './planilha/planilha.component';
import { MenuDeBuscaComponent } from './menu-de-busca/menu-de-busca.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlanilhaComponent,
    MenuDeBuscaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,

    AccordionModule,
    FormsModule,
    InputTextModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
