import { Component, OnInit } from '@angular/core'
import { PageService } from 'src/app/core/services/pages-service/pages.service'
import { Emphasi } from 'src/app/sherad/models/pages/home'

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.scss'],
})
export class DestaquesComponent implements OnInit {
  emphasiList: Emphasi[] = []

  constructor(private pageService: PageService) {}

  ngOnInit(): void {
    this.getEmphasi()
  }

  getEmphasi() {
    this.pageService.getPageHome().subscribe((response) => {
      this.emphasiList = response.data.emphasis
    })
  }
}
