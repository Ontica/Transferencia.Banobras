
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html'
  })
export class AppComponent implements OnInit, OnDestroy {

  tablaAuxiliares = 'Aquí va la tabla de auxiliares';

  title = 'Sesiones de transferencia tecnológica Banobras';

  year = 2021;

  subscription: Subscription | undefined;

  constructor(private httpClient: HttpClient) {}


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  ngOnInit(): void {
    this.setTablaAuxiliares();
  }


  private setTablaAuxiliares(): void {
    const accountsChartUID = 'b2328e67-3f2e-45b9-b1f6-93ef6292204e';
    const keywords = 'Cristina lechuga García';

    const url = `http://172.27.207.97/sicofin/api/v2/financial-accounting` +
                `/${accountsChartUID}/subsidiary-accounts/${keywords}`;

    console.log('antes del get');

    this.subscription = this.httpClient.get(url).subscribe(
      data => {
        console.log(data);
        console.log('regreso satisfactorio');
        this.tablaAuxiliares = JSON.stringify(data);
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
