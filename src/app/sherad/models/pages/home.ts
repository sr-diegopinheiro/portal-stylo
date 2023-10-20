export interface PageHome {
  message: string
  data: PageDataHome
}

interface PageDataHome {
  home: Home[]
  pages: Page[]
  settings: Settings
  banners: Banner[]
  last_news: News[]
  ranking: Ranking[]
  emphasis: Emphasi[]
}

export interface Home {
  id: number
  name: string
  note: any
  is_active: number
  order: number
  _lft: number
  _rgt: number
  parent_id: any
  created_at: string
  updated_at: string
  site_id: number
  is_home: number
  order_home: number
  class: string
  code: string
  home_start: number
  position: any
  type: number
  contents: Content[]
}

interface Content {
  id: number
  type: number
  position: number
  image: string
  title: string
  descritive?: string
  attachment: any
  model: any
  url: any
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
  size_images_id?: number
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

interface Page {
  id: number
  name: string
  note: any
  is_active: number
  order: number
  _lft: number
  _rgt: number
  parent_id: any
  created_at: string
  updated_at: string
  site_id: number
  is_home: number
  order_home?: number
  class: string
  code: string
  home_start: number
  position: any
  type: number
  children?: any[]
}

interface Settings {
  id: number
  logo: string
  nif: string
  full_name: string
  name: string
  email: string
  phone: string
  maps: any
  contact: any
  city_id: number
  zip_code: string
  address: string
  district: string
  number: string
  instagram_url: string
  instagram_user: any
  instagram_password: any
  facebook_url: string
  facebook_user: any
  facebook_password: any
  youtube_url: string
  youtube_user: any
  youtube_password: any
  twitter_url: string
  twitter_user: any
  twitter_password: any
  status: string
  pixels: any
  ads: any
  meta_tags: any
  footer: string
  terms: string
  privacy_policy: string
  note: any
  created_at: string
  updated_at: string
  site_id: number
  email_notification: any
  logo_footer: string
  cookies: string
  whatsapp: string
  payment_gateway: string
  payment_info: PaymentInfo
  android_version: any
  play_store_url: any
  ios_version: any
  apple_store_url: any
  city: City
}

interface PaymentInfo {
  sandbox: string
  email: any
  token: any
  public_key: any
}

interface City {
  id: number
  title: string
  iso: number
  iso_ddd: number
  status: number
  slug: string
  population: number
  lat: string
  long: string
  income_per_capita: string
  state_id: number
  created_at: any
  updated_at: any
  state: State
}

interface State {
  id: number
  title: string
  letter: string
  iso: number
  slug: string
  population: number
  created_at: any
  updated_at: any
}

export interface Banner {
  id: number
  name: string
  image: string
  url?: string
  is_active: number
  type: number
  sequence: number
  created_at: string
  updated_at: string
  site_id: number
  size_images: SizeImage[]
}

interface SizeImage {
  id: number
  name: string
  size_width: number
  size_height: number
  is_enabled: number
  created_at: string
  updated_at: string
  type: number
  code?: string
  pivot: Pivot
}

interface Pivot {
  banner_id: number
  size_image_id: number
  created_at: string
  updated_at: string
  interface_position_id: number
  interface_position: InterfacePosition
}

interface InterfacePosition {
  id: number
  id_position: string
  position_name: string
  is_enabled: number
  created_at: string
  updated_at: string
}

interface News {
  id: number
  type: number
  position: number
  image: string
  title: string
  descritive: string
  attachment: any
  model: any
  url: any
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

export interface Ranking {
  id: number
  type: number
  position: number
  image: string
  title: string
  descritive: string
  attachment: any
  model: any
  url: any
  status: string
  open: string
  start_date: string
  end_date: string
  tags: string[]
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

export interface Emphasi {
  id: number
  type: number
  position: number
  image: string
  title: string
  descritive?: string
  attachment: any
  model: any
  url: any
  status: string
  open: string
  start_date: string
  end_date: string
  tags: string[]
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
