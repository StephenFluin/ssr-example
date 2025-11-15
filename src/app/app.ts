import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <a routerLink="/">Home</a> | <a routerLink="/about">About</a> |
    <a routerLink="/admin">Admin</a>
    <hr />
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('ssr-demo');
}
