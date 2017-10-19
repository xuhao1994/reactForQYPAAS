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
        this.reFreshSize = this.reFreshSize.bind(this)
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
        window.addEventListener("resize",this.reFreshSize)
    }
    componentWillUnmount(){
        document.body.style.overflow='auto'
        window.removeEventListener("resize",this.reFreshSize)
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