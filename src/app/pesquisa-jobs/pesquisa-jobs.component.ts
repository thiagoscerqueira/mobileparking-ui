import { Component, OnInit } from '@angular/core';
import {JobService} from '../service/job.service';
import {ExecucaoJob} from '../../model/ExecucaoJob';

@Component({
  selector: 'app-pesquisa-jobs',
  templateUrl: './pesquisa-jobs.component.html',
  styleUrls: ['./pesquisa-jobs.component.css']
})
export class PesquisaJobsComponent implements OnInit {

  private jobs: ExecucaoJob[];

  cols: any[];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.consultar();

    this.cols = [
      { field: 'identificacao', header: 'Identificação' },
      { field: 'dhInicialExecucao', header: 'Início Execução' },
      { field: 'dhFinalExecucao', header: 'Fim Execução' },
      { field: 'statusExecucao', header: 'Status Execução' }
    ];
  }

  private consultar() {
    this.jobService.listar().subscribe(dados => this.jobs = dados);
  }

}
