import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  private message = 'Hello World!';
  constructor() { }

  getMessage() {
    return this.message;
  }
}
