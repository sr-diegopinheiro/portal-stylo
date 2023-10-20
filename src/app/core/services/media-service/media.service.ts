import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { MediaIndexes } from 'src/app/sherad/models/media'

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://local360.com.br/cms/public'

  getIndex(): Observable<MediaIndexes> {
    const url = `${this.baseUrl}/api/v1/banners`
    return this.http.get<MediaIndexes>(url)
  }
}
