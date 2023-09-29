import { Component } from '@angular/core';
import { HelloService } from './service/hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public message = '';

  constructor(private hello: HelloService){
    this.message = hello.getMessage();
  }
}
