import { configureStore } from '@reduxjs/toolkit'
import countSliceReducer from './count'
import DevTools from '@/components/Devtools'

export const store = configureStore({
  reducer: {
    count: countSliceReducer,
  },
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(DevTools.instrument()),
})
