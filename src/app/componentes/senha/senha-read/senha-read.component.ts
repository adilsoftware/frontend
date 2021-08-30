import { SenhaService } from '../senha.service';
import { Senha } from '../senha.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-senha-read',
  templateUrl: './senha-read.component.html',
  styleUrls: ['./senha-read.component.css']
})
export class SenhaReadComponent implements OnInit {

  senha: Senha[] = []
  colunas = ['senha', 'data', 'empresa', 'acoes']


  constructor(private senhaService: SenhaService,
    private router: Router) { }


  ngOnInit(): void {
    this.senhaService.read().subscribe(senha => {
      this.senha = senha
      console.log(senha)
    })
  }


  editar(senha: Senha): void {
    console.log("testando editar", senha);
    this.senhaService.salvar = false;
    this.senhaService.senha = senha;
    this.router.navigate(['/senha/create'])
  }




  excluir(senha: Senha): void {
    this.senhaService.senha = senha;
    this.router.navigate(['/senha/delete'])
  }


}