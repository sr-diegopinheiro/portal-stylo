import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchTerm: string = ''

  constructor(private router: Router) {}

  ngOnInit(): void {}

  search() {
    if (this.searchTerm) {
      // Navegue para a página de resultados com o termo de pesquisa como parâmetro de rota
      this.router.navigate(['/results'], {
        queryParams: { q: this.searchTerm },
      })
    }
  }
}
