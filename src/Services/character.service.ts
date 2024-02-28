import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) {}

  getCharacters(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}`);
  }
}
