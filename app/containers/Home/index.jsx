import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import HomeHeader from './subpage/HomeHeader'
import Category from '../../components/Category'
import CategoryEnter from '../../components/Category2'
import HomeAd from './subpage/HomeAd'
import HomeListTitle from './subpage/HomeListTitle'
import HomeJgBox from './subpage/HomeJgBox'
import HomeProductList from './subpage/HomeProductList'
import PublicFooter from '../../components/publicFooter'
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
                <HomeListTitle url="/" title="推荐机构"/>
                <HomeJgBox/>
                <HomeListTitle url="/ProList/all" title="推荐套餐"/>
                <HomeProductList cityName={this.props.userinfo.cityName}/>
                <PublicFooter/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userinfo:state.userinfo
    }
}
function mapDispatchToProps(dispatch){
    return{}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)