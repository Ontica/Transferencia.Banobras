
import { Component } from '@angular/core';

import { Auxiliar } from './models/auxiliares';
import { DataAuxiliaresService } from './data/data-auxiliares.service';


@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html'
  })
export class AppComponent {

  title: string = 'Sesiones de transferencia tecnológica Banobras';
  year: number = 2018;
  auxiliares: Auxiliar[] = [];
  keywords: string = 'Mesa';

  constructor(private service: DataAuxiliaresService) { }


  public search() {
    this.setTablaAuxiliares(this.keywords);
  }

  private setTablaAuxiliares(keywords: string): void {
    this.service.getTablaAuxiliares(keywords)
                .then(
                  result => this.auxiliares = result
                );
  }

  public nextYear(): number {
    return this.year;
  }

  public changeTitle(year: number): void {
    this.title = "Siguiente en " + year + " " + new Date().getSeconds();
  }

}
