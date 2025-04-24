import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse, Credentials, RegisterData, RegisterResponse } from '../models/auth.model';
import { mapTo, Observable, tap } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = `https://event-booking-back.onrender.com/api/users`;

  constructor(private http: HttpClient,
    private tokenStorage: TokenStorageService) { }

    login(creds: Credentials): Observable<void> {
      return this.http.post<AuthResponse>(`${this.apiUrl}/login`, creds).pipe(
        tap(response => {
          console.log(response);
          
          // guarda los tokens al recibir la respuesta
          this.tokenStorage.saveTokens(response.tokens);
        }),
        mapTo(void 0)
      );
    }

    register(payload: RegisterData): Observable<RegisterResponse> {
      return this.http.post<RegisterResponse>(this.apiUrl, payload);
    }

    confirmAccount(payload: { email: string; code: string }): Observable<{ message: string }> {
      return this.http.post<{ message: string }>(`${this.apiUrl}/confirm`, payload);
    }
  
    logout(): void {
      this.tokenStorage.clear();
    }
}
