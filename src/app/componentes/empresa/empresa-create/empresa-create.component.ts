import { EmpresaService } from './../empresa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from '../empresa.model';

@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
  styleUrls: ['./empresa-create.component.css']
})
export class EmpresaCreateComponent implements OnInit {

    empresa: Empresa = {
        nome: '', email: '', cnpj: ''
    }
    
    
    constructor(
        private empresaService: EmpresaService,
        private router: Router
    ) { }

    
    ngOnInit(): void {
        if (this.empresaService.salvar) {
            this.empresa = { nome: '', email: '', cnpj: '' }
        } else {
            this.empresa = this.empresaService.empresa;
        }
    }

    
    criarEmpresa(): void {
        if (this.empresaService.salvar) {
            console.log("valor da variável salvar: ", this.empresaService.salvar)
            this.empresaService.create(this.empresa).subscribe(() => {
                this.empresaService.showMessage('Empresa cadastrado com sucesso!')
                this.router.navigate(['/empresa'])
            })
        } else {
            console.log("alterando.....: ", this.empresaService.salvar)
            this.empresaService.update(this.empresa).subscribe(() => {
                this.empresaService.showMessage('Empresa alterado com sucesso!')
                this.router.navigate(['/empresa'])
            })
        }
    }

    cancelar(): void {
        this.router.navigate(['/empresa'])
    }
}