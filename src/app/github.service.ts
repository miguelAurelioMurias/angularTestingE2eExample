
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GithubUser } from 'src/data/github-user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  readonly API_URL = 'https://api.github.com';
  readonly WHAT = ['repositories', 'commits', 'code', 'issues', 'users'];

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<GithubUser[]>(`${this.API_URL}/users`);
  }
}
