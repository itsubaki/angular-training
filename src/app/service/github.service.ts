import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  language: string;
  stargazers_count: number;
  fork: boolean;
  forks: number;
  open_issues: number;
  license: any;
  updated_at: string;
  pushed_at: string;
  archived: boolean;
  html_url: string;
  languages_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private baseURL = 'https://api.github.com';

  constructor(
    private http: HttpClient
  ) { }

  getRepos(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.baseURL}/users/${username}/repos`);
  }
}
