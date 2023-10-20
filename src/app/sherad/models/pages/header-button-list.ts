export interface CategoryList {
  message: string
  data: Category[]
}

export interface Category {
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
  children: any[]
}
