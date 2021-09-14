
import { Component } from '@angular/core';

@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html'
  })
export class AppComponent {

  title: string = 'Sesiones de transferencia tecnológica Banobras';
  year: number = 2018;

  public nextYear(): number {
    return this.year;
  }

  public changeTitle(year: number): void {
    this.title = "Siguiente en " + year + " " + new Date().getSeconds();
  }

}
