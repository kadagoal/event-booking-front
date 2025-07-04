import { Injectable } from '@angular/core';
import { Tokens } from '../models/auth.model';
const ACCESS_KEY = 'APP_ACCESS_TOKEN';
const REFRESH_KEY = 'APP_REFRESH_TOKEN';
const ROLE = 'ROLE';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  saveTokens(tokens: Tokens, role: string): void {
    localStorage.setItem(ACCESS_KEY, tokens.AccessToken);
    localStorage.setItem(REFRESH_KEY, tokens.RefreshToken);
    localStorage.setItem(ROLE, role);

  }

  getAccessToken(): string | null {
    return localStorage.getItem(ACCESS_KEY);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(REFRESH_KEY);
  }

  clear(): void {
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(REFRESH_KEY);
  }

  isAuthenticated(): boolean {
    const token = this.getAccessToken();
    return !!token;
  }

  getRole(): string {
    return localStorage.getItem(ROLE) || '';
  }
  constructor() { }
}
