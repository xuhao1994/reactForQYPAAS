import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'
class HomeListTitle extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="homeListTitle">
            	<Link to={this.props.url}><span>{this.props.title}</span></Link>
            </div>
        )
    }
}
export default HomeListTitle