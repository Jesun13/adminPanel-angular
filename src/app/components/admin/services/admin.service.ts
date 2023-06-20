import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getPeronalList() {
    return this.http.get<IUser[]>(
      'https://jsonplaceholder.typicode.com/users?_start=0&_limit=5'
    );
  }

  getPerson(id: number) {
    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
