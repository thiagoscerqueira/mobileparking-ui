import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConsultaEstacionamento} from '../../model/ConsultaEstacionamento';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstacionamentoService {

  constructor(private http: HttpClient) { }

  pesquisar(placa: string) {
    return this.http.get<ConsultaEstacionamento>(`${environment.apiUrl}/${placa}`);
  }
}
