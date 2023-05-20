import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/enviroments/enviroment';
import { Observable } from 'rxjs';
import { Equipo } from './Equipo';
import { EquipoDetail } from './equipo-detail';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

private apiUrl: string = environment.otherUrl + 'teams';
constructor(private http: HttpClient) { }

getEquipos(): Observable<EquipoDetail[]> {
  return this.http.get<EquipoDetail[]>(this.apiUrl);

}
}
