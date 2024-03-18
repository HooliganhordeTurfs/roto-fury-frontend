import { usePrices } from 'hooks/usePrices'

export const useFuryPrice = () => {
  const prices = usePrices()
  return prices?.FURY || 0
}
