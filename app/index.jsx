import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'

import RouteMap from './router/routerMap'

//引用公共样式
import './static/style.css'

render(
    <RouteMap history={hashHistory}/>
    ,document.getElementById('root')
)