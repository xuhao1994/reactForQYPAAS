import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeHeader from './subpage/HomeHeader'
import Category from '../../components/Category'
import CategoryEnter from '../../components/Category2'
import HomeAd from './subpage/HomeAd'
import HomeListTitle from './subpage/HomeListTitle'


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
                <CategoryEnter/>
                <HomeAd/>
                <HomeListTitle url="/" title="推荐套餐"/>
            </div>
        )
    }
}
export default Home