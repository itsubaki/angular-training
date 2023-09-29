import { Component, OnInit } from '@angular/core';
import { GitHubService, Repository } from './service/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public repos: Repository[] = [];

  constructor(
    private github: GitHubService,
  ) { }

  ngOnInit() {
    this.github.getRepos('angular').subscribe((repos: Repository[]) => {
      this.repos = repos;
    });
  }
}
