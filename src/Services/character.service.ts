import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = 'https://swapi.dev/api/people/';
  private picsumUrl = 'https://picsum.photos/200'; // Méret: 200x200 pixel

  constructor(private http: HttpClient) {}

  getCharacters(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}`).pipe(
      map((response: any) => {
        // Generáljuk hozzá a random képet minden karakterhez
        const charactersWithImages = response.results.map((character: any) => {
          return {
            ...character,
            image: `${this.picsumUrl}?random=${Math.floor(Math.random() * 1000)}`
          };
        });
        // Visszaadjuk a módosított karaktereket
        return { ...response, results: charactersWithImages };
      })
    );
  }
}
