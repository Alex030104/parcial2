import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroment';
import { Observable } from 'rxjs';
import { Partido } from './Partido';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  private apiUrl: string = environment.baseUrl + 'partidos';

constructor(private http: HttpClient) { }

getpartidos(): Observable<Partido[]> {
  return this.http.get<Partido[]>(this.apiUrl);

}
}
