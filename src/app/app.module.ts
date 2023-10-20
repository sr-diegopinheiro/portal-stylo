import { LOCALE_ID, NgModule } from '@angular/core'
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ButtonModule } from 'primeng/button'
import { CarouselModule } from 'primeng/carousel'
import { DividerModule } from 'primeng/divider'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BannerComponent } from './components/items/banner/banner.component'
import { CardNoPhotoComponent } from './components/items/card-no-photo/card-no-photo.component'
import { CardPhotoTopComponent } from './components/items/card-photo-top/card-photo-top.component'
import { DestaquesComponent } from './components/items/destaques/destaques.component'
import { HeaderComponent } from './components/items/header/header.component'
import { MarketingThreeCardsComponent } from './components/items/marketing-three-cards/marketing-three-cards.component'
import { RankingComponent } from './components/items/ranking/ranking.component'
import { SearchBarComponent } from './components/items/search-bar/search-bar.component'
import { TitleSectionComponent } from './components/items/title-section/title-section.component'
import { CategoryComponent } from './components/pages/category/category.component'
import { HomeComponent } from './components/pages/home/home.component'
import { SearchResultsComponent } from './components/pages/search-results/search-results.component'
import { AuthApiCmsInterceptor } from './core/interceptors/auth-api-cms.interceptor';
import { EmphasiCardRedComponent } from './components/items/emphasi-card-red/emphasi-card-red.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchBarComponent,
    CategoryComponent,
    BannerComponent,
    TitleSectionComponent,
    CardPhotoTopComponent,
    CardNoPhotoComponent,
    DestaquesComponent,
    MarketingThreeCardsComponent,
    RankingComponent,
    EmphasiCardRedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    DividerModule,
  ],
  providers: [
    provideClientHydration(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthApiCmsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
