export interface CityIndexes {
  message: string
  data: CityIndex[]
}

interface CityIndex {
  id: number
  title: string
  letter: string
  lat: string
  long: string
}
