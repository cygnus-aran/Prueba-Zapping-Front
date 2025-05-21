import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

interface User {
  email: string;
  nombre?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private currentUserSubject = new BehaviorSubject<User | null>(this.getCurrentUser());
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    // In a real application, you would make an API call here
    // This is just a mock implementation for demonstration
    if (email && password) {
      const user: User = { email };
      localStorage.setItem('auth_token', 'mock_jwt_token');
      localStorage.setItem('current_user', JSON.stringify(user));

      this.isAuthenticatedSubject.next(true);
      this.currentUserSubject.next(user);
      return true;
    }
    return false;
  }

  register(nombre: string, email: string, password: string): boolean {
    // In a real application, you would make an API call here
    if (nombre && email && password) {
      const user: User = { email, nombre };
      localStorage.setItem('auth_token', 'mock_jwt_token');
      localStorage.setItem('current_user', JSON.stringify(user));

      this.isAuthenticatedSubject.next(true);
      this.currentUserSubject.next(user);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('current_user');

    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);

    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.hasToken();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  private getCurrentUser(): User | null {
    const userStr = localStorage.getItem('current_user');
    if (userStr) {
      try {
        return JSON.parse(userStr) as User;
      } catch (e) {
        return null;
      }
    }
    return null;
  }
}
