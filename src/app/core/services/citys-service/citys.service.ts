import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { CityIndexes } from 'src/app/sherad/models/citys/citys'

@Injectable({
  providedIn: 'root',
})
export class CitysService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://local360.com.br/cms/public'

  getCitys(): Observable<CityIndexes> {
    const url = `${this.baseUrl}/api/v1/cities?state=27`
    return this.http.get<CityIndexes>(url)
  }
}
