import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

  produto: Produto[] = []
  colunas = ['produto', 'marca', 'valor', 'acoes']


  constructor(private produtoService: ProdutoService,
    private router: Router) { }



  ngOnInit(): void {
    this.produtoService.read().subscribe(produto => {
      this.produto = produto
      console.log(produto)
    })
  }


  editar(produto: Produto): void {
    console.log("testando editar", produto);
    this.produtoService.salvar = false;
    this.produtoService.produto = produto;
    this.router.navigate(['/produto/create'])
  }




  excluir(produto: Produto): void {
    this.produtoService.produto = produto;
    this.router.navigate(['/produto/delete'])


  }

}
