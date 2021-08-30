import { SenhaDeleteComponent } from './componentes/senha/senha-delete/senha-delete.component';
import { SenhaCreateComponent } from './componentes/senha/senha-create/senha-create.component';
import { ProdutoDeleteComponent } from './componentes/produto/produto-delete/produto-delete.component';
import { EmpresaDeleteComponent } from './componentes/empresa/empresa-delete/empresa-delete.component';
import { EmpresaCreateComponent } from './componentes/empresa/empresa-create/empresa-create.component';
import { ProdutoCreateComponent } from './componentes/produto/produto-create/produto-create.component';



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ManutencaoEstudantesComponent } from './views/manutencao-estudantes/manutencao-estudantes.component';
import { EstudanteCreateComponent } from './componentes/estudante/estudante-create/estudante-create.component';
import { EstudanteDeleteComponent } from './componentes/estudante/estudante-delete/estudante-delete.component';
import { ManutencaoProdutoComponent } from './views/manutencao-produto/manutencao-produto.component';
import { ManutencaoEmpresaComponent } from './views/manutencao-empresa/manutencao-empresa.component';
import { ManutencaoSenhaComponent } from './views/manutencao-senha/manutencao-senha.component';



const routes: Routes = [{
    path: "",
    component: HomeComponent
},
{
    path: "estudantes",
    component: ManutencaoEstudantesComponent
},
{
    path: "estudantes/create",
    component: EstudanteCreateComponent
},
{
    path: "estudantes/delete",
    component: EstudanteDeleteComponent
},
{
    path: "produto",
    component: ManutencaoProdutoComponent
},
{
    path: "produto/create",
    component: ProdutoCreateComponent
},
{
    path: "produto/delete",
    component: ProdutoDeleteComponent
},
{
    path: "empresa",
    component: ManutencaoEmpresaComponent
},
{
    path: "empresa/create",
    component: EmpresaCreateComponent
},
{
    path: "empresa/delete",
    component: EmpresaDeleteComponent
},
{
    path: "senha",
    component: ManutencaoSenhaComponent
},
{
    path: "senha/create",
    component: SenhaCreateComponent
},
{
    path: "senha/delete",
    component: SenhaDeleteComponent
},




];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }