export interface MediaIndexes {
  message: string
  data: MediaIndex[]
}

interface MediaIndex {
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
