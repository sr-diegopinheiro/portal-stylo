export interface ContentLastNews {
  message: string
  data: ContentLastNewsData
}

interface ContentLastNewsData {
  current_page: number
  data: ContentLastNewsItem[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: Link[]
  next_page_url: string
  path: string
  per_page: number
  prev_page_url: any
  to: number
  total: number
}

interface ContentLastNewsItem {
  id: number
  type: number
  position: number
  image: string
  title: string
  descritive?: string
  attachment: any
  model: any
  url?: string
  status: string
  open: string
  start_date: string
  end_date: string
  tags?: string[]
  bond: any
  credits?: string
  note: any
  published_at: string
  slug: string
  subtitle?: string
  created_at: string
  updated_at: string
  site_id: number
  code: any
  page_id: number
  emphasis: number
  size_images_id: number
  cover_caption?: string
  page_view: number
  ranking: number
  headline: number
  url_news_one: any
  url_news_two: any
  url_news_three: any
  type_model: any
  endpoint: any
}

interface Link {
  url?: string
  label: string
  active: boolean
}
