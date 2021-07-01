import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'import-meta-url';
  logo = (new URL('../svgs/angular.svg', import.meta.url)).toString();
}
