import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LayerControl from '../layer'
import NumControl from '../NumCountrol'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'  
import * as someActions from '../../actions/userinfo.js' 
import './style.css'
import '../../static/animate.css'
class AddCar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            proSelectCount:1,
            showLayer:false
        }
    }
    render() {
        return (
            <div>
                <span className="AddCar" onClick={this.handleClick.bind(this)}></span>
                {
                    this.state.showLayer
                    ?
                    <LayerControl>
                        <div className="shopCarBox slideInUp clearfix">
                            <div className="clearfix">
                                <div className="fl shopCarProImg">
                                    <img src={this.props.data.img} alt=""/>
                                </div>
                                <div className="fl shopCarMessageBox">
                                    <p>{this.props.data.name}</p>
                                    <p>¥{this.props.data.price}</p>
                                    <p>剩余套餐数&nbsp;999</p>
                                    <p>选择数量&nbsp;{this.state.proSelectCount}</p>
                                </div>
                            </div>
                            <div className="clearfix">
                                <span className="fl">套餐数量</span>
                                <div className="fr">
                                    <NumControl proSelectCount={this.state.proSelectCount} NumMinusFn={this.NumMinusFn.bind(this)} NumPlusFn={this.NumPlusFn.bind(this)}/>
                                </div>
                            </div>
                            <div className="clearfix" onClick={this.sureClick.bind(this)}>
                                确定
                            </div>
                            <span className="closeLayer" onClick={this.closeClick.bind(this)}></span>
                        </div>
                    </LayerControl>
                    :""
                }
            </div>
        )
    }
    handleClick(){
        this.setState({showLayer:true})
    }
    sureClick(){
        let actions = this.props.userInfoActions
        let userInfo = this.props.userInfo
        userInfo.shopCarNum = this.state.proSelectCount + userInfo.shopCarNum
        let copy = Object.assign({}, userInfo);
        actions.update(copy)
        this.setState({showLayer:false})
    }
    closeClick(){
        this.setState({showLayer:false})
    }
    NumMinusFn(){
        let num = this.state.proSelectCount>=2?this.state.proSelectCount-1:1;
        this.setState({
            proSelectCount:num
        })
    }
    NumPlusFn(){
        let num = this.state.proSelectCount<=98?this.state.proSelectCount+1:99;
        this.setState({
            proSelectCount:num
        })
    }
}

function mapStateToProps(state){
    return{
        userInfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return{
        userInfoActions:bindActionCreators(someActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCar);