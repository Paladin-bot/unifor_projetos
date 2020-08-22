import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nome: string;
  cep: number;
  endereco: string;
  contato: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nome: 'Guido', cep: 60142421, endereco: "Rua Amaraldo Leão 883", contato: '(85)99999-9999', email: 'oi@hotmail.com'},
  {nome: 'Yuri', cep: 72842142,  endereco: "Rua Amaraldo Leão 883", contato: '(85)99999-9999', email: 'oi@hotmail.com'},
  {nome: 'João', cep: 31412442, endereco: "Rua Amaraldo Leão 883", contato: '(85)99999-9999', email: 'oi@hotmail.com'},
  {nome: 'Wendel', cep: 98654321, endereco: "Rua Amaraldo Leão 883", contato: '(85)99999-9999', email: 'oi@hotmail.com'},
  {nome: 'André', cep: 12345678, endereco: "Rua Amaraldo Leão 883", contato: '(85)99999-9999', email: 'oi@hotmail.com'},
  {nome: 'Thayna', cep: 12345678, endereco: "Rua Amaraldo Leão 883", contato: '(85)99999-9999', email: 'oi@hotmail.com'},
  {nome: 'Tadeu', cep: 12345678, endereco: "Rua Amaraldo Leão 883", contato: '(85)99999-9999', email: 'oi@hotmail.com'},
  {nome: 'Neymar', cep: 12345678, endereco: "Rua Amaraldo Leão 883", contato: '(85)99999-9999', email: 'oi@hotmail.com'},
  {nome: 'Elon', cep: 12345678, endereco: "Rua Amaraldo Leão 883", contato: '(85)99999-9999', email: 'oi@hotmail.com'},
  {nome: 'Thiago', cep: 12345678, endereco: "Rua Amaraldo Leão 883", contato: '(85)99999-9999', email: 'oi@hotmail.com'},
];

@Component({
  selector: 'app-planilha',
  templateUrl: './planilha.component.html',
  styleUrls: ['./planilha.component.scss']
})
export class PlanilhaComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'cep', 'endereco', 'contato', 'email'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

