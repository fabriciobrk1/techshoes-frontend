import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UsuarioCreate {
  nomeCompleto: string;
  idade: number;
  cpf: string;
  telefone: string;
  endereco: string;  // *** uso de “endereco” em vez de “rua”
  numero: string;
  cidade: string;
  estado: string;
  email: string;
  senha: string;
}

export interface UsuarioLogin {
  email: string;
  senha: string;
}

export interface UsuarioResponse {
  id: number;
  nomeCompleto: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'https://localhost:7071/api/Usuario'; 

  constructor(private http: HttpClient) { }

  registrar(usuario: UsuarioCreate): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, usuario);
  }

  login(loginData: UsuarioLogin): Observable<UsuarioResponse> {
    return this.http.post<UsuarioResponse>(`${this.apiUrl}/login`, loginData);
  }
}
