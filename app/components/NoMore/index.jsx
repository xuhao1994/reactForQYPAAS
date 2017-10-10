import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'
class NoMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="noMore">没有更多了...</div>
        )
    }
}
export default NoMore