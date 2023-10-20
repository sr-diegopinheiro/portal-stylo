import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Contactor } from 'src/app/sherad/models/contact/contactor'

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://local360.com.br/cms/public'

  postContact(dados: Contactor): Observable<Contactor> {
    const url = `${this.baseUrl}/api/v1/contact`
    return this.http.post<Contactor>(url, dados)
  }
}
