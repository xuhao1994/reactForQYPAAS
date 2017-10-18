import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import * as someActions from '../../actions/userinfo.js'
import './style.css'

class ShopCarNum extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <b>
            {
                this.props.userinfo.shopCarNum>0
                ?
                <span className="shopCarNum">
                    {this.props.userinfo.shopCarNum}
                </span>
                :""
            }
            </b>
        	
        )
    }
}


function mapStateToProps(state){
    return{
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return{}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopCarNum);