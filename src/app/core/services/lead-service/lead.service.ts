import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Store } from 'src/app/sherad/models/lead/store'

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://local360.com.br/cms/public'

  postStore(dados: Store): Observable<Store> {
    const url = `${this.baseUrl}/api/v1/leads`
    return this.http.post<Store>(url, dados)
  }
}
