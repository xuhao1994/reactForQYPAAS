import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'
class LayerControl extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            styleheight:""
        }
    }
    render() {
        let style = {
            height:this.state.height
        }
        return (
            <div className="layer" style={style}>
            	{this.props.children}
            </div>
        )
    }
    componentDidMount(){
        this.reFreshSize()
        window.addEventListener("resize",this.reFreshSize.bind(this))
    }
    componentWillUnmount(){
        document.body.style.overflow='auto'
    }
    reFreshSize(){
        const windowHeight = window.screen.height
        document.body.style.overflow='hidden'
        this.setState({
            height:windowHeight+"px"
        })
    }
}
export default LayerControl