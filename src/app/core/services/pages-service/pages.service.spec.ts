import { TestBed } from '@angular/core/testing'

import { PageService } from './pages.service'

describe('PagesService', () => {
  let service: PageService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(PageService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
