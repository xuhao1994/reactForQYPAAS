import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {TABPAGE} from '../../config/localStoreKey.js'
import localStore from '../../util/localStore.js'
import * as defaultActionsFormOtherFile from '../../actions/tabpage.js'
import ShopCarNum from '../ShopCarNum'
import './style.css'


class PublicFooter extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            tabs:[
                {tabName:"首页",id:1},
                {tabName:"消息",id:2},
                {tabName:"购物车",id:3},
                {tabName:"我的",id:4}
            ],
            currentIndex:this.props.tabPage
        }
    }
    render(){
        let char = "currentLabel"
        let tabList = this.state.tabs.map((ele,index)=>{
            let active = ele.id == this.state.currentIndex ? char : '';
            return <div key={index} className={"fl "+active} onClick={this.clickHandle.bind(this,ele.id)}>
                    <span></span>
                    <Link to="/">{ele.tabName}</Link>
                    {ele.id == 3?<ShopCarNum/>:""}
                   </div>
        })
        return (
            <div className="publicFooter clearfix">
            	{tabList}
            </div>
        )
    }
    clickHandle(index){
        let update = this.props.defaultActions.update
        localStore.setItem(TABPAGE,index)
        update({tabPage:index})
        this.setState({
            currentIndex:index
        })
    }
}

function mapStateToProps(state){
    return{
        tabPage:state.tabPage.tabPage
    }
}

function mapDispatchToProps(dispatch){
    return{
        defaultActions:bindActionCreators(defaultActionsFormOtherFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PublicFooter);