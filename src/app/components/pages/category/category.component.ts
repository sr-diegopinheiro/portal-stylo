import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  test: string = ''
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const category = params['category']
      this.test = category
    })
  }
}
