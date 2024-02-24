import { Injectable } from '@angular/core';
import { Profesional } from '../model/profesional';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {
  public profesionals: Profesional[];
  public profesional: Profesional;

  private url = "http://localhost:3000/profesionals"

  constructor(private http: HttpClient) {}

  public getAll():Observable<Object>{
    return this.http.get(this.url + '?id_user=' + this.profesional);
  }

  public getOne(name: string, last_name:string):Observable<Object>{
    return this.http.get(this.url + '?name=' + this.profesional.name + '&last_name=' + this.profesional.last_name);
  }

  public add(profesional:Profesional):Observable<Object>{
    return this.http.post(this.url, profesional);
  }

  public edit(profesional: Profesional):Observable<Object>{
    return this.http.put(this.url, profesional);
  }

  public delete(profesional: Profesional):Observable<Object>{
    return this.http.delete(this.url, {body: profesional});
  }

}
