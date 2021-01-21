import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './styles/index.css'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'

import store from './store'

import App from './modules/App'

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
)
