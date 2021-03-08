import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { alunos } from '../model/alunos';


@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  listaAlunos: alunos[] = [
    { nome: 'Camilao', idade: 23, email: 'camilao@hotmail.com', curso: 'Ciência de Computação'},
    { nome: 'Vanião', idade: 30, email: 'vaniao@hotmail.com', curso: 'Redes de Computadores'},
    { nome: 'Erikão', idade: 21, email: 'erikao@hotmail.com', curso: 'Mediciana'},
    { nome: 'Silvião', idade: 55, email: 'silviao@hotmail.com', curso: 'Direito'}
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'Email', 'Curso'];

  ngOnInit(): void {
  }

  

}
