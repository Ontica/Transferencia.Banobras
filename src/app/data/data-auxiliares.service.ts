import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";

import { Auxiliar, Payload } from "../models/auxiliares";


@Injectable()
export class DataAuxiliaresService {

  constructor(private httpClient: HttpClient) {}

  public getTablaAuxiliares(keywords: string): Promise<Auxiliar[]> {
    const accountsChartUID = 'b2328e67-3f2e-45b9-b1f6-93ef6292204e';

    const url = `http://172.27.207.97/sicofin/api/v2/financial-accounting` +
                `/${accountsChartUID}/subsidiary-accounts/${keywords}`;

    return this.httpClient.get<Payload>(url)
                          .pipe(map(result => result.data))
                          .toPromise()
                          .catch(error => console.log('hubo un problema en la llamada a la API', error))
  }

}
