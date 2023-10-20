import { Component, OnInit } from '@angular/core'
import { PageService } from 'src/app/core/services/pages-service/pages.service'
import { Home } from 'src/app/sherad/models/pages/home'

@Component({
  selector: 'app-emphasi-card-red',
  templateUrl: './emphasi-card-red.component.html',
  styleUrls: ['./emphasi-card-red.component.scss'],
})
export class EmphasiCardRedComponent implements OnInit {
  politica: Home[] = []

  constructor(private pageService: PageService) {}

  ngOnInit(): void {
    this.getPolitica()
  }

  getPolitica() {
    this.pageService.getPageHome().subscribe((response) => {
      this.politica = response.data.home.filter((item) => item.name === 'Política')
      console.log('home', this.politica)
    })
  }
}
