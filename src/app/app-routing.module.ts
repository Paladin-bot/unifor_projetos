import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlanilhaComponent } from './planilha/planilha.component';
import { MenuDeBuscaComponent } from './menu-de-busca/menu-de-busca.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'planilha', component: PlanilhaComponent },
  { path: 'busca', component: MenuDeBuscaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
