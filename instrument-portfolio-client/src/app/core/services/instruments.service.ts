import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Instrument } from 'src/app/shared/models/Instrument.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  url: string;

  constructor(private httpClient: HttpClient) {
      this.url = `${environment.API_URL}instruments`;
   }

  public getAllInstruments(): Observable<Array<Instrument>> {
    return this.httpClient.get<Array<Instrument>>(this.url);
  }

  public async addNewInstrument(name: string, symbol: string, instrumentType: string): Promise<any> {
    return await this.httpClient.post<Array<Instrument>>(this.url, {
        name, symbol, instrumentType
    }).toPromise();
  }

  public async deleteInstrument(instrumentId: number): Promise<any> {
    const deletionURL = `${this.url}/${instrumentId}`;
  
    return await this.httpClient.delete<Array<Instrument>>(deletionURL).toPromise();
  }
}