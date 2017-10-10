import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'
import './style.css'


class PublicFooter extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="publicFooter clearfix">
            	<div className="fl currentLabel"><Link to="/">首页</Link></div>
            	<div className="fl"><Link to="/">消息</Link></div>
            	<div className="fl"><Link to="/">购物车</Link></div>
            	<div className="fl"><Link to="/">我的</Link></div>
            </div>
        )
    }
}
export default PublicFooter