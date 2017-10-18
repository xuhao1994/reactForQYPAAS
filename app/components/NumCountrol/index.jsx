import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'
class NumControl extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="NumControl">
            	<span className="NumPlus" onClick={this.PlusClick.bind(this)}></span>
            	<span className="NumResult">{this.props.proSelectCount}</span>
            	{
            		this.props.proSelectCount>1
            		?
            		<span className="NumMinus" onClick={this.MinusClick.bind(this)}></span>
            		:""
            	}
            </div>
        )
    }
    MinusClick(){
    	this.props.NumMinusFn()
    }
    PlusClick(){
    	this.props.NumPlusFn()
    }
}
export default NumControl