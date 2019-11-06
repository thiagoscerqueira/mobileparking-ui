import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExecucaoJob} from '../../model/ExecucaoJob';
import {ConsultaEstacionamento} from '../../model/ConsultaEstacionamento';

@Injectable({
  providedIn: 'root'
})
export class EstacionamentoService {

  servicePlacaUrl = 'http://localhost:8080/estacionamento/placa';

  constructor(private http: HttpClient) { }

  pesquisar(placa: string) {
    return this.http.get<ConsultaEstacionamento>(`${this.servicePlacaUrl}/${placa}`);
  }
}
