import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { CursoModel } from '../model/curso-model.model';
import { LaravelApiService } from '../service/laravel-api.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit, OnChanges {

  @Output() pageInfo = {
    name: 'Cursos',
    breadcrumbs: [
      { id: 0, label: 'Início', link: '/starter' },
      { id: 1, label: 'Cursos', link: '/cursos' },
    ]
  };

  cursos: Array<CursoModel> = [];
  curso: CursoModel = new CursoModel();
  grid_loading: boolean = false;
  isCreate: boolean = true;

  constructor(private laravelApi: LaravelApiService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getCursos();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getCursos();
  }

  getCursos(): Array<object> {
    this.grid_loading = true;
    this.laravelApi.getCursos().subscribe((cursos: CursoModel[]) => {
      this.cursos = cursos;
      this.grid_loading = false;
    });
    return this.cursos;
  }

  selectCurso(cursoSelected: CursoModel) {
    this.isCreate = false;
    this.curso = this.clone(cursoSelected);
  }

  saveCurso(): void {

    this.grid_loading = true;

    let rs: Observable<any>;
    let api = this.laravelApi;

    let new_obj = this.clone(this.curso);

    if (this.curso.id == null) {
      rs = api.createCurso(new_obj);
    } else {
      rs = api.updateCurso(new_obj, this.curso.id);
    }

    rs.subscribe(curso => {
      this.getCursos();
      this.clearForm();
    });
  }

  deleteCurso(id: number): void {
    this.grid_loading = true;
    if (id == this.curso.id) {
      this.clearForm();
    }
    this.laravelApi.deleteCurso(id).subscribe(() => {
      this.getCursos();
    });
  }

  cancelaEditar(): void {
    this.clearForm();
  }

  clearForm(): void {
    this.curso = new CursoModel();
    this.isCreate = true;
  }

  clone(instance: any): any {
    let new_obj = new (instance.constructor as any);
    let attr: any;

    for (attr in instance) {
      if (typeof instance[attr] === "object") {
        new_obj[attr] = instance[attr].clone();
      } else {
        new_obj[attr] = instance[attr];
      }
    }
    return new_obj;
  }
}
