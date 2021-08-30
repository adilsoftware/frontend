import { EmpresaService } from 'src/app/componentes/empresa/empresa.service';


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manutencao-empresa',
  templateUrl: './manutencao-empresa.component.html',
  styleUrls: ['./manutencao-empresa.component.css']
})
export class ManutencaoEmpresaComponent implements OnInit {
  
  constructor(
    private empresaService: EmpresaService,
    private router: Router

  ) { }

ngOnInit(): void {
}

navegarEmpresaCreate(): void {
    this.empresaService.salvar = true;
    this.router.navigate(['/empresa/create'])
}

}