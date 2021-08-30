import { Produto } from '../produto.model';
import { ProdutoService } from './../produto.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produto: Produto = { produto: '', marca: '', valor: '' }
  constructor(
    private produtoService: ProdutoService, private router: Router
  ) { }


  ngOnInit(): void {
    this.produto = this.produtoService.produto;
  }


  delete(): void {
    this.produtoService.delete(this.produto).subscribe(() => {
      this.produtoService.showMessage('Produto excluído com sucesso!')
      this.router.navigate(['/produto'])
    })
  }


  cancelar(): void {
    this.router.navigate(['/produto'])
  }
}
