import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = "https://localhost:5001/api/users";

  constructor(private http: HttpClient) { }

  readAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<User[]>(this.API_URL).subscribe(
        result => resolve(result),
        error => reject(error));
    });
  }

  create(user: User): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post<any>(this.API_URL, user).subscribe(
        result => resolve(result),
        error => reject(error));
    });
  }

  edit(user: User): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put<any>(this.API_URL + '/' + user.id, user).subscribe(
        result => resolve(result),
        error => reject(error));
    });
  }

  remove(id: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete<User>(this.API_URL + '/' + id).subscribe(
        result => resolve(result),
        error => reject(error));
    });
  }

}
