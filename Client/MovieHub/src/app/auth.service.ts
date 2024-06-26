import { Injectable, inject, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, user } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { User } from './types/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);
  user$ = user(this.firebaseAuth);
  currentUserSig = signal<User | null | undefined>(undefined);
  isLoggedIn: boolean = false;

  register(email: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((res) => updateProfile(res.user, {}));

    return from(promise);
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password)
    .then(() => {});
    
    return from(promise)
  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth);
    
    return from(promise);
  }
}
