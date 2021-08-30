import { SenhaService } from './../../componentes/senha/senha.service';


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-manutencao-senha',
  templateUrl: './manutencao-senha.component.html',
  styleUrls: ['./manutencao-senha.component.css']
})
export class ManutencaoSenhaComponent implements OnInit {

 

  constructor(
    private senhaService: SenhaService,
    private router: Router

  ) { }


  ngOnInit(): void {
  }


  navegarSenhaCreate(): void {
    this.senhaService.salvar = true;
    this.router.navigate(['/senha/create'])
  }


}
