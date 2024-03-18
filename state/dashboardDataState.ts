import { DashboardData } from 'components/Pages/Dashboard/Dashboard'
import { atom } from 'recoil'
interface DashboardDataState {
  data: DashboardData[]
  isInitialized: boolean
  furyPrice: number
  marketCap: number
}
export const dashboardDataState = atom<DashboardDataState>({
  key: 'dashboardData',
  default: {
    furyPrice: 0,
    marketCap: 0,
    data: [],
    isInitialized: false,
  },
  effects_UNSTABLE: [],
})
