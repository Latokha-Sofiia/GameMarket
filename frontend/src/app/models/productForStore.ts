export interface GamingProducts {
  id: number,
  gamesName: string,
  price: number,
  description: string,
  category: object,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}
