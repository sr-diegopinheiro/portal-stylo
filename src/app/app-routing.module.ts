import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CategoryComponent } from './components/pages/category/category.component'
import { HomeComponent } from './components/pages/home/home.component'
import { SearchResultsComponent } from './components/pages/search-results/search-results.component'

const routes: Routes = [
  { path: 'noticias/:category', component: CategoryComponent },
  { path: '', component: HomeComponent },
  { path: 'results', component: SearchResultsComponent },

  { path: '**', redirectTo: '' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
