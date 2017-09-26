import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeHeader from './subpage/HomeHeader'
import Category from '../../components/Category'


class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
            	<HomeHeader/>
                <Category/>
            </div>
        )
    }
}
export default Home