import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL_API_CHARACTERS: string = 'http://gateway.marvel.com/v1/public/characters?ts=1645638309&apikey=931e130889939c868648e63e864eb359&hash=e6ae5f55298c2eacc85f09f6811859ca'
  URL_API_COMICS: string = 'http://gateway.marvel.com/v1/public/comics?ts=1645638309&apikey=931e130889939c868648e63e864eb359&hash=e6ae5f55298c2eacc85f09f6811859ca'
  URL_API_SERIES: string = 'http://gateway.marvel.com/v1/public/series?ts=1645638309&apikey=931e130889939c868648e63e864eb359&hash=e6ae5f55298c2eacc85f09f6811859ca'
 
  constructor(private http: HttpClient) {
    }

    getAllSeries(): Observable<any> {
      return this.http.get<any>(this.URL_API_SERIES)
      .pipe(map((data:any) => data.data.results))
    }
    
    getAllCharacters(): Observable<any> {
      return this.http.get<any>(this.URL_API_CHARACTERS)
      .pipe(map((data:any) => data.data.results))
    } 

    getAllComics(): Observable<any> { 
      return this.http.get<any>(this.URL_API_COMICS)
      .pipe(map((data:any) => data.data.results))
    }
}

