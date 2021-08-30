import { Router } from '@angular/router';
import { EstudanteService } from './../estudante.service';
import { Estudante } from './../estudante.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-estudante-delete',
  templateUrl: './estudante-delete.component.html',
  styleUrls: ['./estudante-delete.component.css']
})
export class EstudanteDeleteComponent implements OnInit {
  estudante: Estudante = { nome: '', cpf: '', email: '' }
  constructor(
    private estudanteService: EstudanteService, private router: Router
  ) { }
  ngOnInit(): void {
    this.estudante = this.estudanteService.estudante;
  }
  delete(): void {
    this.estudanteService.delete(this.estudante).subscribe(() => {
      this.estudanteService.showMessage('Estudante excluído com sucesso!')
      this.router.navigate(['/estudantes'])
    })
  }
  cancelar(): void {
    this.router.navigate(['/estudantes'])
  }
}
