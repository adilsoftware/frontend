import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Estudante } from './estudante.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EstudanteService {

    url = "http://localhost:3001/estudante"
    salvar = false;
    estudante: Estudante = {
        nome: '',
        cpf: '',
        email: ''
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
    create(estudante: Estudante): Observable<Estudante> {
        return this.http.post<Estudante>(this.url, estudante)
    }

    read(): Observable<Estudante[]> {
        return this.http.get<Estudante[]>(this.url);
    }

    update(estudante: Estudante): Observable<Estudante> {
        const urlAlterar = `${this.url}/${estudante._id}`;
        return this.http.patch<Estudante>(urlAlterar, estudante)
    }

    delete(estudante: Estudante): Observable<Estudante> {
        const urlExcluir = `${this.url}/${estudante._id}`;
        return this.http.delete<Estudante>(urlExcluir)
        }
        

}