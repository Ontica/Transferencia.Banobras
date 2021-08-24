
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html'
  })
export class AppComponent {

  constructor(private httpClient: HttpClient) {}

  title = 'Sesiones de transferencia tecnológica Banobras';

  year = 2021;

  public nextYear(): number {
    return this.year;
  }

  public changeTitle(year: number): void {
    this.title = "Siguiente en " + year + " " + new Date().getSeconds();
  }

  getTablaAuxiliares() {
    const accountsChartUID = 'b2328e67-3f2e-45b9-b1f6-93ef6292204e';
    const keywords = 'Cristina lechuga García';

    const url = `http://172.27.207.97/sicofin/api/v2/financial-accounting` +
                `/${accountsChartUID}/subsidiary-accounts/${keywords}`;

    this.httpClient.get(url);

    return "mi tabla de auxiliares";
  }

}
