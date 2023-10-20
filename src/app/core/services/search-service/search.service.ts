import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Search } from 'src/app/sherad/models/search/search'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://local360.com.br/cms/public'

  postAnswer(dados: Search): Observable<Search> {
    const url = `${this.baseUrl}/api/v1/search`
    return this.http.post<Search>(url, dados)
  }
}
