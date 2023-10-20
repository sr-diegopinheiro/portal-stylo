import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Settings } from 'src/app/sherad/models/settings/settings'

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://local360.com.br/cms/public'

  getIndex(): Observable<Settings> {
    const url = `${this.baseUrl}/api/v1/settings`
    return this.http.get<Settings>(url)
  }
}
