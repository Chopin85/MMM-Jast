export type StockResponse = {
  summaryDetail: any
  price: any
  meta: {
    purchasePrice: number
    symbol: string
    displayCurrency?: string
    name: string
    quantity?: number
    buyPrix?: number
    hidden?: boolean
  }
}
