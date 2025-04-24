import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { tap, map }    from 'rxjs/operators';
import { Observable }  from 'rxjs';

interface LoginResponse {
  token: string;
  role: 'cliente' | 'organizador';
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'https://event-booking-back.onrender.com/'
  private _role: string | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<void> {
    return this.http
      .post<LoginResponse>(`${this.apiUrl}/auth/login`, { username, password })
      .pipe(
        tap(res => {
          localStorage.setItem('jwt', res.token);
          localStorage.setItem('role', res.role);
          this._role = res.role;
        }),
        map(() => {})
      );
  }

  logout(): void {
    localStorage.removeItem('jwt');
    localStorage.removeItem('role');
    this._role = null;
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  getRole(): string | null {
    if (!this._role) {
      this._role = localStorage.getItem('role');
    }
    return this._role;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  hasRole(expected: string | string[]): boolean {
    const role = this.getRole();
    const arr = Array.isArray(expected) ? expected : [expected];
    return !!role && arr.includes(role);
  }
}