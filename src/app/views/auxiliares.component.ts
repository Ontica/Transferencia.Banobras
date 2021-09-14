import { Component } from "@angular/core";
import { DataAuxiliaresService } from "../data/data-auxiliares.service";

import { Auxiliar } from "../models/auxiliares";

@Component(
  {
    selector: 'auxiliares',
    templateUrl: './auxiliares.component.html'
  })
export class AuxiliaresComponent {

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

}
