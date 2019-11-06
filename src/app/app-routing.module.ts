import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PesquisaJobsComponent} from './pesquisa-jobs/pesquisa-jobs.component';
import {PesquisaPlacaComponent} from './pesquisa-placa/pesquisa-placa.component';

const routes: Routes = [
  {path: 'jobs', component: PesquisaJobsComponent},
  {path: 'pesquisaPlaca', component: PesquisaPlacaComponent},
  {path: '', redirectTo: '/pesquisaPlaca', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
