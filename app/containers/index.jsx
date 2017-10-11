import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import localStore from '../util/localStore.js'
import {CITYNAME,TABPAGE} from '../config/localStoreKey.js'
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
        if(cityName==null){
            cityName = '昆明'
        }

        //存储城市信息到redux
        this.props.userInfoActions.update({
            cityName:cityName
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