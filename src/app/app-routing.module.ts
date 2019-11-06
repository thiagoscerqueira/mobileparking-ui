import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PesquisaPlacaComponent} from './pesquisa-placa/pesquisa-placa.component';

const routes: Routes = [
  {path: 'pesquisaPlaca', component: PesquisaPlacaComponent},
  {path: '', redirectTo: '/pesquisaPlaca', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
