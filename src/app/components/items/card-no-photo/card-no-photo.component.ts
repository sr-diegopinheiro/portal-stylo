import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
@Component({
  selector: 'app-card-no-photo',
  templateUrl: './card-no-photo.component.html',
  styleUrls: ['./card-no-photo.component.scss'],
})
export class CardNoPhotoComponent {
  @Input() imgUrl: string = ''
  @Input() tagText: string = ''
  @Input() textTitle: string = ''
  @Input() url: string = ''
  @Input() fontSize: number = 16

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToNews() {
    this.router.navigate([this.url])
  }
}
