import { Router } from '@angular/router';
import { EstudanteService } from './../estudante.service';
import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante.model';
@Component({
    selector: 'app-estudante-create',
    templateUrl: './estudante-create.component.html',
    styleUrls: ['./estudante-create.component.css']
})
export class EstudanteCreateComponent implements OnInit {
    
    estudante: Estudante = {
        nome: '', cpf: '', email: ''
    }
    
    
    constructor(
        private estudanteService: EstudanteService,
        private router: Router
    ) { }

    
    ngOnInit(): void {
        if (this.estudanteService.salvar) {
            this.estudante = { nome: '', cpf: '', email: '' }
        } else {
            this.estudante = this.estudanteService.estudante;
        }
    }

    
    criarEstudante(): void {
        if (this.estudanteService.salvar) {
            console.log("valor da variável salvar: ", this.estudanteService.salvar)
            this.estudanteService.create(this.estudante).subscribe(() => {
                this.estudanteService.showMessage('Estudante cadastrado com sucesso!')
                this.router.navigate(['/estudantes'])
            })
        } else {
            console.log("alterando.....: ", this.estudanteService.salvar)
            this.estudanteService.update(this.estudante).subscribe(() => {
                this.estudanteService.showMessage('Estudante alterado com sucesso!')
                this.router.navigate(['/estudantes'])
            })
        }
    }

    cancelar(): void {
        this.router.navigate(['/estudantes'])
    }
}