
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

interface Payload {
  status: string;
  data: any;
}

interface Auxiliar {
  number: string;
  name: string;
}

@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html'
  })
export class AppComponent implements OnInit, OnDestroy {

  title: string = 'Sesiones de transferencia tecnológica Banobras';

  year: number = 2021;

  auxiliares: Auxiliar[] = [];

  keywords: string = 'Mesa';

  subscription: Subscription | undefined;

  constructor(private httpClient: HttpClient) {}


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
    const accountsChartUID = 'b2328e67-3f2e-45b9-b1f6-93ef6292204e';

    const url = `http://172.27.207.97/sicofin/api/v2/financial-accounting` +
                `/${accountsChartUID}/subsidiary-accounts/${keywords}`;

    console.log('antes del get');

    this.subscription = this.httpClient.get<Payload>(url).subscribe(
      result => {
        console.log(result);
        console.log('regreso satisfactorio');
        this.auxiliares = result.data;
      },
      error => console.log('hubo un problema en la llamada a la API', error)
    );

    console.log('después del get');
  }

  public nextYear(): number {
    return this.year;
  }

  public changeTitle(year: number): void {
    this.title = "Siguiente en " + year + " " + new Date().getSeconds();
  }

}
