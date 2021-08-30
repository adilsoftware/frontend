import { EstudanteService } from './../../componentes/estudante/estudante.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-manutencao-estudantes',
    templateUrl: './manutencao-estudantes.component.html',
    styleUrls: ['./manutencao-estudantes.component.css']
})
export class ManutencaoEstudantesComponent implements OnInit {
    
    constructor(
        private estudanteService: EstudanteService,
        private router: Router
    
      ) { }

    ngOnInit(): void {
    }

    navegarEstudanteCreate(): void {
        this.estudanteService.salvar = true;
        this.router.navigate(['/estudantes/create'])
    }

}