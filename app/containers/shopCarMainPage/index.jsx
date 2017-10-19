import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import PublicFooter from '../../components/publicFooter'
import Header from './subpage/header'
class shopCarMainPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<div>
                <Header title="购物车"/>
                <PublicFooter/>
            </div>
        )
    }
}
export default shopCarMainPage