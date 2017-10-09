import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchInput from '../searchInput'
import './style.css'


class HeaderDemo1 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className='HeaderDemo1'>
            	<span onClick={this.handleClick.bind(this)}></span>
            	<SearchInput placeholder="请输入搜索套餐名字"/>
            </div>
        )
    }
    handleClick(){
    	window.history.back();
    }
}
export default HeaderDemo1