import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'
class AddCar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <span className="AddCar" onClick={this.handleClick.bind(this)}></span>
        )
    }
    handleClick(){
        console.log(this.props.data)
    }
}
export default AddCar