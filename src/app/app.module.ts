import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GitHubService } from './service/github.service';
import { HttpClientModule } from '@angular/common/http';
import { RepositoryComponent } from './component/repository.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent
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
    RepositoryComponent,
  ]
})
export class AppModule { }
