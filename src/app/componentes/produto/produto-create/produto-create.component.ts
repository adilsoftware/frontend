import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {
    produto: '', marca: '', valor: ''
  }

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) { }


  ngOnInit(): void {
    if (this.produtoService.salvar) {
      this.produto = { produto: '', marca: '', valor: '' }
    } else {
      this.produto = this.produtoService.produto;
    }
  }


  criarProduto(): void {
    if (this.produtoService.salvar) {
      console.log("valor da variável salvar: ", this.produtoService.salvar)
      this.produtoService.create(this.produto).subscribe(() => {
        this.produtoService.showMessage('Produto cadastrado com sucesso!')
        this.router.navigate(['/produto'])
      })
    } else {
      this.produtoService.update(this.produto).subscribe(() => {
        this.produtoService.showMessage('Produto alterado com sucesso!')
        this.router.navigate(['/produto'])
      })
    }
  }



  cancelar(): void {
    this.router.navigate(['/produto'])
  }

}

