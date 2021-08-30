import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './componentes/template/footer/footer.component';
import { MenuComponent } from './componentes/template/menu/menu.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';

import { MatCardModule } from '@angular/material/card';
import { ManutencaoEstudantesComponent } from './views/manutencao-estudantes/manutencao-estudantes.component';
import { EstudanteCreateComponent } from './componentes/estudante/estudante-create/estudante-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EstudanteReadComponent } from './componentes/estudante/estudante-read/estudante-read.component';
import { EstudanteDeleteComponent } from './componentes/estudante/estudante-delete/estudante-delete.component';
import { ManutencaoProdutoComponent } from './views/manutencao-produto/manutencao-produto.component';
import { ProdutoCreateComponent } from './componentes/produto/produto-create/produto-create.component';
import { ManutencaoEmpresaComponent } from './views/manutencao-empresa/manutencao-empresa.component';
import { EmpresaCreateComponent } from './componentes/empresa/empresa-create/empresa-create.component';
import { ProdutoReadComponent } from './componentes/produto/produto-read/produto-read.component';
import { EmpresaReadComponent } from './componentes/empresa/empresa-read/empresa-read.component';
import { EmpresaDeleteComponent } from './componentes/empresa/empresa-delete/empresa-delete.component';
import { ProdutoDeleteComponent } from './componentes/produto/produto-delete/produto-delete.component';
import { ManutencaoSenhaComponent } from './views/manutencao-senha/manutencao-senha.component';
import { SenhaCreateComponent } from './componentes/senha/senha-create/senha-create.component';
import { SenhaReadComponent } from './componentes/senha/senha-read/senha-read.component';
import { SenhaDeleteComponent } from './componentes/senha/senha-delete/senha-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ManutencaoEstudantesComponent,
    EstudanteCreateComponent,
    EstudanteReadComponent,
    EstudanteDeleteComponent,
    ManutencaoProdutoComponent,
    ProdutoCreateComponent,
    ManutencaoEmpresaComponent,
    EmpresaCreateComponent,
    ProdutoReadComponent,
    EmpresaReadComponent,
    EmpresaDeleteComponent,
    ProdutoDeleteComponent,
    ManutencaoSenhaComponent,
    SenhaCreateComponent,
    SenhaReadComponent,
    SenhaDeleteComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule, 
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
