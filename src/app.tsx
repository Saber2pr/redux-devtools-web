import 'normalize.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, useDispatch, useSelector } from 'react-redux'

import { store } from './redux'
import { countSlice } from './redux/count'
import DevTools from './components/Devtools'

export const App = () => {
  const count = useSelector<any>((state) => state.count.value)
  const dispatch = useDispatch()

  return (
    <div style={{ padding: 8 }}>
      <div style={{ margin: 50 }}>
        <div>{count}</div>
        <button
          onClick={() => {
            dispatch(countSlice.actions.addCount(1))
          }}
        >
          add
        </button>
      </div>
      <div style={{ height: '50vh' }}>
        <DevTools />
      </div>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
