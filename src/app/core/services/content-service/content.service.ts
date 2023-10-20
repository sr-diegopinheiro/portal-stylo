import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ContentLastNews } from 'src/app/sherad/models/contents/lastNews'

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://local360.com.br/cms/public'

  getLastNews(): Observable<ContentLastNews> {
    const url = `${this.baseUrl}/api/v1/last-news`
    return this.http.get<ContentLastNews>(url)
  }
}
