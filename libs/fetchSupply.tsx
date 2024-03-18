import { API_URL } from '../constants'

export type FetchSupplyResponse = {
  circulating: number
  total: number
}

export const fetchSupply = async (): Promise<FetchSupplyResponse> => {
  const response = await fetch(`${API_URL}/cosmos/bank/v1beta1/supply`)
  let data = await response.json()
  data = data?.data ? data.data : data
  return data
}
