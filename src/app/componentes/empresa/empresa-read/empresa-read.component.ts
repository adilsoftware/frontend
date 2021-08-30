import { Empresa } from '../empresa.model';
import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-empresa-read',
  templateUrl: './empresa-read.component.html',
  styleUrls: ['./empresa-read.component.css']
})
export class EmpresaReadComponent implements OnInit {

  empresa: Empresa[] = []
  colunas = ['nome', 'email', 'cnpj', 'acoes']


  constructor(private empresaService: EmpresaService, private router: Router) {
  }

  ngOnInit(): void {
    this.empresaService.read().subscribe(empresa => {
      this.empresa = empresa
      console.log(empresa)
    })
  }

  editar(empresa: Empresa): void {
    console.log("testando editar", empresa);
    this.empresaService.salvar = false;
    this.empresaService.empresa = empresa;
    this.router.navigate(['/empresa/create'])

  }

  excluir(empresa: Empresa): void {
    this.empresaService.empresa = empresa;
    this.router.navigate(['/empresa/delete'])
    
  }



}

