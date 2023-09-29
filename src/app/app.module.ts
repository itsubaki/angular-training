import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GitHubService } from './service/github.service';
import { HttpClientModule } from '@angular/common/http';
import { RepositoriesComponent } from './repositories/repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    GitHubService,
  ],
  bootstrap: [
    AppComponent,
    RepositoriesComponent,
  ]
})
export class AppModule { }
