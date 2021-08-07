import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actor } from '../model/actor.class';
import { Observable } from 'rxjs';

const URL: string = 'http://localhost:8080/api/actors';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(
    private http: HttpClient) { }

    list(): Observable<Actor[]> {
      return this.http.get(URL+'/') as Observable<Actor[]>;
    }
}