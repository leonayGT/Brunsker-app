import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InputFieldComponent } from '../components/input-field/input-field.component';
@Injectable({
  providedIn: 'root'
})
export class ImoveisService {

  url:string
  getImoveis() {
    return this.http.get("http://localhost:3000/imovel")
  }
  getCep(cep:number):any{
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  }
  constructor(private http: HttpClient) {
    }

  }

