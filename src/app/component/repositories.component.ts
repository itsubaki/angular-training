import { Component, OnInit } from '@angular/core';
import { GitHubService, Repository } from '../service/github.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  public repos: Repository[] = [];

  constructor(
    private github: GitHubService,
  ) { }

  ngOnInit() {
    this.github.getRepos('angular').subscribe((repos: Repository[]) => {
      this.repos = repos;
    });
  }

  color(name: string): string {
    switch (name) {
      case "C":
        return "c_color";
      case "Go":
        return "go_color";
      case "Java":
        return "java_color";
      case "Scala":
        return "scala_color";
      case "Elixir":
        return "elixir_color";
      case "JavaScript":
        return "javascript_color";
      case "TypeScript":
        return "typescript_color";
      case "HCL":
        return "hcl_color";
      case "Gherkin":
        return "gherkin_color";
      case "Shell":
        return "shell_color";
      case "Makefile":
        return "makefile_color";
      case "CMake":
        return "cmake_color";
      case "HTML":
        return "html_color";
      case "CSS":
        return "css_color";
      case "Python":
        return "python_color";
      case "Rust":
        return "rust_color";
      case "Other":
        return "other_color";
      default:
        return "other_color";
    }
  }
}
