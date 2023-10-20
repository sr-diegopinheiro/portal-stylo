import { Component, OnInit } from '@angular/core'
import { PageService } from 'src/app/core/services/pages-service/pages.service'
import { Ranking } from 'src/app/sherad/models/pages/home'

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent implements OnInit {
  newsList: Ranking[] = []

  constructor(private pageService: PageService) {}

  ngOnInit(): void {
    this.getEmphasi()
  }

  getEmphasi() {
    this.pageService.getPageHome().subscribe((response) => {
      this.newsList = response.data.ranking
    })
  }
}
