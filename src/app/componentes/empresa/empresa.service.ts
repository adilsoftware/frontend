import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Empresa } from './empresa.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmpresaService {

  
  url = "http://localhost:3001/empresa"
  salvar = false;
  empresa: Empresa = {
      nome: '',
      email: '',
      cnpj: ''
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

  create(empresa: Empresa): Observable<Empresa> {
      return this.http.post<Empresa>(this.url, empresa)
  }

  read(): Observable<Empresa[]> {
      return this.http.get<Empresa[]>(this.url);
  }

  update(empresa: Empresa): Observable<Empresa> {
      const urlAlterar = `${this.url}/${empresa._id}`;
      return this.http.patch<Empresa>(urlAlterar, empresa)
  }

  delete(empresa: Empresa): Observable<Empresa> {
      const urlExcluir = `${this.url}/${empresa._id}`;
      return this.http.delete<Empresa>(urlExcluir)
      }
      

}