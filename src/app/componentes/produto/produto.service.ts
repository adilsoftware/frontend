
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Produto } from './produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url = "http://localhost:3001/produto"

  salvar = false;
  produto: Produto = {
    produto: '',
    marca: '',
    valor: ''
  }


  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }
  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, produto)
  }

  read(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }


  update(produto: Produto): Observable<Produto> {
    const urlAlterar = `${this.url}/${produto._id}`;
    return this.http.patch<Produto>(urlAlterar, produto)
  }


  delete(produto: Produto): Observable<Produto> {
    const urlExcluir = `${this.url}/${produto._id}`;
    return this.http.delete<Produto>(urlExcluir)
  }


}