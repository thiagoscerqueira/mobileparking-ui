import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExecucaoJob} from '../../model/ExecucaoJob';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  serviceUrl = 'http://localhost:8081/demorest/execucoes';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<ExecucaoJob[]>(this.serviceUrl);
  }
}
