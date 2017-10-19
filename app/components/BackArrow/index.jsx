import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class BackArrow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <span className='BackArrow' onClick={this.handleClick.bind(this)}></span>
        )
    }

    handleClick(){
    	window.history.back();
    }
}
export default BackArrow