import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'

import './style.css'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="homeAdBox clearfix">
            	<div><Link to="/"><img src="http://www.qydjk.org/resource/front/shop/image/homeParticularlyTab/20170803/2017080310050003869741.png" alt=""/></Link></div>
            	<div><Link to="/"><img src="http://www.qydjk.org/resource/front/shop/image/homeParticularlyTab/20170803/2017080310050001512875.png" alt=""/></Link></div>
            	<div><Link to="/"><img src="http://www.qydjk.org/resource/front/shop/image/homeParticularlyTab/20170803/2017080310060002064002.png" alt=""/></Link></div>
            	<div><Link to="/"><img src="http://www.qydjk.org/resource/front/shop/image/homeParticularlyTab/20170803/2017080310070000169988.png" alt=""/></Link></div>
            </div>
        )
    }
}
export default HomeAd