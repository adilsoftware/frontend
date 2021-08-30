import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Senha } from './senha.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class SenhaService {

  url = "http://localhost:3001/senha"

  salvar = false;
  senha: Senha = {
    senha: '',
    data: '',
    empresa: ''
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


  create(senha: Senha): Observable<Senha> {
    return this.http.post<Senha>(this.url, senha)
  }

  read(): Observable<Senha[]> {
    return this.http.get<Senha[]>(this.url);
  }


  update(senha: Senha): Observable<Senha> {
    const urlAlterar = `${this.url}/${senha._id}`;
    return this.http.patch<Senha>(urlAlterar, senha)
  }

  delete(senha: Senha): Observable<Senha> {
    const urlExcluir = `${this.url}/${senha._id}`;
    return this.http.delete<Senha>(urlExcluir)
    }
    



}
