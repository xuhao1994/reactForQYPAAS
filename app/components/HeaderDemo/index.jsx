import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'

class HeaderDemo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className='HeaderDemo'>
                {this.props.children}
            </div>
        )
    }
}
export default HeaderDemo