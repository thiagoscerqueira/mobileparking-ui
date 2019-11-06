import { Component, OnInit } from '@angular/core';
import {EstacionamentoService} from '../service/estacionamento.service';
import {ConsultaEstacionamento} from '../../model/ConsultaEstacionamento';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-pesquisa-placa',
  templateUrl: './pesquisa-placa.component.html',
  styleUrls: ['./pesquisa-placa.component.css']
})
export class PesquisaPlacaComponent implements OnInit {

  placa: string;
  estacionamento: ConsultaEstacionamento;
  msgs: Message[] = [];

  constructor(private estacionamentoService: EstacionamentoService) { }

  ngOnInit() {
    this.placa = '';
  }

  pesquisar() {
    console.log(this.placa);
    this.hideMessages();
    this.estacionamento = null;

    this.estacionamentoService.pesquisar(this.placa).subscribe(dados => {
      console.log(dados);
      this.estacionamento = dados;
    }, error => {
      this.msgs = [];
      this.msgs.push({severity: 'error', summary: 'Erro', detail: 'Estacionamento não encontrado para a placa informada', life: 5000});
    } );
  }

  hideMessages() {
    this.msgs = [];
  }


}
