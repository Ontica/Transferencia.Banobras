
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Auxiliar } from './models/auxiliares';
import { DataAuxiliares } from './data/data-auxiliares';


@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html'
  })
export class AppComponent implements OnInit, OnDestroy {

  title: string = 'Sesiones de transferencia tecnológica Banobras';

  year: number = 2018;

  auxiliares: Auxiliar[] = [];

  keywords: string = 'Mesa';

  subscription: Subscription | undefined;

  dataAuxiliares: DataAuxiliares;

  constructor(private httpClient: HttpClient) {
    this.dataAuxiliares = new DataAuxiliares(this.httpClient);
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  ngOnInit(): void {
    // this.setTablaAuxiliares(this.keywords);
  }

  public search() {
    this.setTablaAuxiliares(this.keywords);
  }

  private setTablaAuxiliares(keywords: string): void {
    this.subscription = this.dataAuxiliares.getTablaAuxiliares(keywords).subscribe(
      result => {
        this.auxiliares = result;
      },
      error => console.log('hubo un problema en la llamada a la API', error)
    );
  }

  public nextYear(): number {
    return this.year;
  }

  public changeTitle(year: number): void {
    this.title = "Siguiente en " + year + " " + new Date().getSeconds();
  }

}
