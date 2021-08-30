import { Router } from '@angular/router';
import { SenhaService } from '../senha.service';
import { Component, OnInit } from '@angular/core';
import { Senha } from '../senha.model';



@Component({
  selector: 'app-senha-create',
  templateUrl: './senha-create.component.html',
  styleUrls: ['./senha-create.component.css']
})


export class SenhaCreateComponent implements OnInit {


  senha: Senha = {
    senha: '', data: '', empresa: ''
  }


  constructor(
    private senhaService: SenhaService,
    private router: Router
  ) { }



  ngOnInit(): void {
    if (this.senhaService.salvar) {
      this.senha = { senha: '', data: '', empresa: '' }
    } else {
      this.senha = this.senhaService.senha;
    }
  }




  criarSenha(): void {
    if (this.senhaService.salvar) {
      console.log("valor da variável salvar: ", this.senhaService.salvar)
      this.senhaService.create(this.senha).subscribe(() => {
        this.senhaService.showMessage('Senha cadastrado com sucesso!')
        this.router.navigate(['/senha'])
      })
    } else {
      this.senhaService.update(this.senha).subscribe(() => {
        this.senhaService.showMessage('Senha alterado com sucesso!')
        this.router.navigate(['/senha'])
      })
    }
  }




  cancelar(): void {
    this.router.navigate(['/senha'])
  }
}
