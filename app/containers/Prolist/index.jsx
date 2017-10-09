import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HeaderDemo1 from '../../components/HeaderDemo1'
import './style.css'

class Prolist extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	var data = {
    		
    	}




        return (
            <div>
                <HeaderDemo1/>
            	{this.props.params.key}
            </div>
        )
    }
}
export default Prolist