import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Answer } from 'src/app/sherad/models/poll/answer'

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://local360.com.br/cms/public'

  putAnswer(dados: Answer): Observable<Answer> {
    const url = `${this.baseUrl}/api/v1/questions/1`
    return this.http.put<Answer>(url, dados)
  }
}
