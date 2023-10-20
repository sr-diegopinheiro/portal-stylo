export interface Settings {
  message: string
  data: Data
}

interface Data {
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
  social_medias: any[]
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
