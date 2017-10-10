import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import localStore from '../util/localStore.js'
import {CITYNAME} from '../config/localStoreKey.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFormOtherFile from '../actions/userinfo.js'


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
        userInfoActions:bindActionCreators(userInfoActionsFormOtherFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);