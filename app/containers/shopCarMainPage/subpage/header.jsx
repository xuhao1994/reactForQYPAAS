import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HeaderDemo from '../../../components/HeaderDemo'
class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <HeaderDemo>
                {this.props.title}
                <span className='rightSpan editAll'>编辑全部</span>
            </HeaderDemo>
        )
    }
}
export default Header