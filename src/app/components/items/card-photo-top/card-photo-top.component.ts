import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-card-photo-top',
  templateUrl: './card-photo-top.component.html',
  styleUrls: ['./card-photo-top.component.scss'],
})
export class CardPhotoTopComponent implements OnInit {
  @Input() imgUrl: string | undefined
  @Input() tagText: string | undefined
  @Input() textTitle: string | undefined
  @Input() url: string | undefined

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToNews() {
    this.router.navigate([this.url])
  }
}
