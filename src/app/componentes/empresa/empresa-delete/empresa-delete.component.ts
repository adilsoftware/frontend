import { EmpresaService } from 'src/app/componentes/empresa/empresa.service';
import { Router } from '@angular/router';
import { Empresa } from '../empresa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-delete',
  templateUrl: './empresa-delete.component.html',
  styleUrls: ['./empresa-delete.component.css']
})
export class EmpresaDeleteComponent implements OnInit {

  empresa: Empresa = { nome: '', email: '', cnpj: '' }


  constructor(
    private empresaService: EmpresaService, private router: Router
  ) { }



  ngOnInit(): void {
    this.empresa = this.empresaService.empresa;
  }


  delete(): void {
    this.empresaService.delete(this.empresa).subscribe(() => {
      this.empresaService.showMessage('Empresa excluído com sucesso!')
      this.router.navigate(['/empresa'])
    })
  }



  cancelar(): void {
    this.router.navigate(['/empresa'])
  }


}
