import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, delay, retry } from 'rxjs/operators';
import { CursoModel } from '../model/curso-model.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

const DATA_ACCESS_PREFIX: string = "http://localhost:90/api/curso";

@Injectable({
  providedIn: 'root'
})
export class LaravelApiService {

  public message: string = "Uninitialized";

  constructor(private client: HttpClient) { }

  async fetchData() {
    return await this.client
      .get<CursoModel[]>(`${DATA_ACCESS_PREFIX}`)
      .pipe(delay(1000))
      .toPromise();
  }

  getCursos(): Observable<any> {
    return this.client.get<CursoModel[]>(`${DATA_ACCESS_PREFIX}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Erro ao retornar as lista de Cursos: ${error.statusText || "Unknown"} `
        );
      })
    );
  }

  deleteCurso(id: number): Observable<any> {
    return this.client.delete<CursoModel>(`${DATA_ACCESS_PREFIX}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(
          `Error ao tentar remover o Curso. ${error.statusText || "Unknown"} `
        );
      })
    );
  }

  createCurso(curso: CursoModel) {
    return this.client.post(`${DATA_ACCESS_PREFIX}`, curso);
  }

  updateCurso(curso: CursoModel, id: number) {
    return this.client.patch(`${DATA_ACCESS_PREFIX}/${id}`, curso);
  }
}
