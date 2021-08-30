import { ProdutoService } from './../../componentes/produto/produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoReadComponent } from 'src/app/componentes/produto/produto-read/produto-read.component';

@Component({
  selector: 'app-manutencao-produto',
  templateUrl: './manutencao-produto.component.html',
  styleUrls: ['./manutencao-produto.component.css']
})
export class ManutencaoProdutoComponent implements OnInit {
  

  constructor(
    private produtoService: ProdutoService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }


  
  
  navegarProdutoCreate(): void{
    this.produtoService.salvar = true;
    this.router.navigate(['/produto/create'])
  }


}
