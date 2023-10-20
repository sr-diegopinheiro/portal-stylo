import { Component, OnInit } from '@angular/core'
import { PageService } from 'src/app/core/services/pages-service/pages.service'
import { SettingsService } from 'src/app/core/services/settings-service/settings.service'
import { Category } from 'src/app/sherad/models/pages/header-button-list'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logoUrl: string = ''
  instragramUrl: string = ''
  facebookUrl: string = ''
  youtubeUrl: string = ''
  twitterUrl: string = ''
  categoryList: Category[] = []
  categoryPathList: string[] = []
  constructor(private settingsService: SettingsService, private pageService: PageService) {}

  ngOnInit() {
    this.getButtonCategory()
    this.getSocialNetworkUrl()
  }

  getSocialNetworkUrl() {
    this.settingsService.getIndex().subscribe((response) => {
      this.logoUrl = response.data.logo
      this.instragramUrl = response.data.instagram_url
      this.facebookUrl = response.data.facebook_url
      this.youtubeUrl = response.data.youtube_url
      this.twitterUrl = response.data.twitter_url
    })
  }

  getButtonCategory() {
    this.pageService.getCategoryList().subscribe((response) => {
      this.categoryList = response.data
    })
  }
}
