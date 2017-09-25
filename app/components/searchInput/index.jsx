import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	inputVal:''
        }
    }
    render() {
        return (
            <div className="searchInputBox">
            	<input 
            	type="text"
            	placeholder={this.props.placeholder}
            	onChange={this.handleChange.bind(this)}
            	/>
            </div>
        )
    }
    handleChange(e){
    	this.setState({
    		inputVal:e.target.value
    	})
    }
}
export default SearchInput