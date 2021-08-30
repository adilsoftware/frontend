import { Senha } from './../senha.model';
import { SenhaService } from './../senha.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-senha-delete',
  templateUrl: './senha-delete.component.html',
  styleUrls: ['./senha-delete.component.css']
})


export class SenhaDeleteComponent implements OnInit {


  senha: Senha = { senha: '', data: '', empresa: '' }


  constructor(
    private senhaService: SenhaService, private router: Router
  ) { }



  ngOnInit(): void {
    this.senha = this.senhaService.senha;
  }


  delete(): void {
    this.senhaService.delete(this.senha).subscribe(() => {
      this.senhaService.showMessage('Senha excluído com sucesso!')
      this.router.navigate(['/senha'])
    })
  }
  cancelar(): void {
    this.router.navigate(['/senha'])
  }
}
