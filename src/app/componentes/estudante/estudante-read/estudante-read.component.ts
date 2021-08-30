import { EstudanteService } from './../estudante.service';
import { Estudante } from './../estudante.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudante-read',
  templateUrl: './estudante-read.component.html',
  styleUrls: ['./estudante-read.component.css']
})
export class EstudanteReadComponent implements OnInit {
  estudantes: Estudante[] = []
  colunas = ['nome', 'cpf', 'email', 'acoes']

  constructor(private estudanteService: EstudanteService,
    private router: Router) { }

  ngOnInit(): void {
    this.estudanteService.read().subscribe(estudantes => {
      this.estudantes = estudantes
      console.log(estudantes)
    })
  }

  editar(estudante: Estudante): void {
    console.log("testando editar", estudante);
    this.estudanteService.salvar = false;
    this.estudanteService.estudante = estudante;
    this.router.navigate(['/estudantes/create'])
  }

  excluir(estudante: Estudante): void {
    this.estudanteService.estudante = estudante;
    this.router.navigate(['/estudantes/delete'])
    }
    

}
