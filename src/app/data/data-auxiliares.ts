import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Auxiliar, Payload } from "../models/auxiliares";


export class DataAuxiliares {

  constructor(private httpClient: HttpClient) {}

  public getTablaAuxiliares(keywords: string): Observable<Auxiliar[]> {
    const accountsChartUID = 'b2328e67-3f2e-45b9-b1f6-93ef6292204e';

    const url = `http://172.27.207.97/sicofin/api/v2/financial-accounting` +
                `/${accountsChartUID}/subsidiary-accounts/${keywords}`;

    return this.httpClient.get<Payload>(url)
                          .pipe(map(result => result.data));
  }

}
