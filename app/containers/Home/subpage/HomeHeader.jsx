import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'

import SearchInput from '../../../components/searchInput'

import './style.css'



class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="homeHeader">
            	<Link to='/'>昆明</Link>
            	<SearchInput 
            	placeholder="请输入套餐/医院名称"/>
            </div>
        )
    }
}
export default HomeHeader