import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LayerControl from '../layer'
import './style.css'
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
                        <div className="shopCarBox clearfix">
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
                                <div className="fr">1</div>
                            </div>
                            <div className="clearfix" onClick={this.sureClick.bind(this)}>
                                确定
                            </div>
                        </div>
                    </LayerControl>
                    :""
                }
            </div>
        )
    }
    handleClick(){
        console.log(this.props.data)
        this.setState({showLayer:true})
    }
    sureClick(){

    }
}
export default AddCar