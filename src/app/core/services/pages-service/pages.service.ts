import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { CategoryList } from 'src/app/sherad/models/pages/header-button-list'
import { PageHome } from 'src/app/sherad/models/pages/home'

@Injectable({
  providedIn: 'root',
})
export class PageService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://local360.com.br/cms/public'

  getCategoryList(): Observable<CategoryList> {
    const url = `${this.baseUrl}/api/v1/pages`
    return this.http.get<CategoryList>(url)
  }

  getPageHome(): Observable<PageHome> {
    const url = `${this.baseUrl}/api/v1/home-page`
    return this.http.get<PageHome>(url)
  }
}
