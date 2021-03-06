import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import localStore from '../util/localStore.js'
import {CITYNAME,TABPAGE,USERACCOUNT} from '../config/localStoreKey.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFormOtherFile from '../actions/userinfo.js'
import * as defaultActionsFormOtherFile from '../actions/tabpage.js'


class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	initDone:false
        }
    }
    render() {
        return (
        	<div>
        		{
        			this.state.initDone
        			?this.props.children
        			:<div>加载中...</div>
        		}
        	</div>            
        )
    }
    componentDidMount(){
		let cityName = localStore.getItem(CITYNAME);
        let userAccount = localStore.getItem(USERACCOUNT);
        if(cityName==null){
            cityName = '昆明'
        }
        if(userAccount==null){
            userAccount = '18519793652'
        }
        //存储城市和相关用户信息到redux
        this.props.userInfoActions.update({
            cityName:cityName,
            userAccount:userAccount,
            userName:"",
            shopCarNum:0,
            shopCarProList:[]
        });

        let tabPage = localStore.getItem(TABPAGE);
        if(tabPage==null||tabPage=='undefined'){
            tabPage = 1
            localStore.setItem(TABPAGE,tabPage)
        }
        //存储footer信息到redux
        this.props.defaultActions.update({
            tabPage:tabPage
        });
        this.setState({
			initDone:true
		});
    }
}

function mapStateToProps(state){
    return{}
}

function mapDispatchToProps(dispatch){
    return{
        userInfoActions:bindActionCreators(userInfoActionsFormOtherFile,dispatch),
        defaultActions:bindActionCreators(defaultActionsFormOtherFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);