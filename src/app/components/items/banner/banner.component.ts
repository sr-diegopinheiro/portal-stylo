import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, AfterViewInit {
  images: string[] = ['https://local360.com.br/cms/public/storage/banners/64ee32a143ca1.gif']

  interval: any

  selectedImage: string = ''

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    this.selectedImage = this.images[0]
    this.startCarousel()
    this.setStyle()
  }

  startCarousel() {
    console.log('start')
    this.interval = setInterval(() => {
      this.nextSlide()
    }, 1000)
  }

  stopCarousel() {
    clearInterval(this.interval)
  }

  nextSlide() {
    const currentIndex = this.images.indexOf(this.selectedImage)
    const nextIndex = (currentIndex + 1) % this.images.length
    this.selectedImage = this.images[nextIndex]
  }

  ngAfterViewInit() {
    this.setStyle()
  }

  setStyle() {
    const pagination = this.elementRef.nativeElement.querySelector(
      '.p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button'
    )
    if (pagination) {
      this.renderer.setStyle(pagination, 'background-color', '#fc2929')
      this.renderer.setStyle(pagination, 'transform', 'translateY(-35px)')
      this.renderer.setStyle(pagination, 'position', 'relative')
      this.renderer.setStyle(pagination, 'z-index', '99')
      this.renderer.setStyle(pagination, 'border-radius', '10px')
    }
  }
}
