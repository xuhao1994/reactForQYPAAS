import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'
import './style.css'
class TCDemo1 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className='productItemBox clearfix'>
            	<div>
            		<Link to="/">
            			<img className="proimg" src={this.props.img}/>
            		</Link>
            	</div>
            	<div>
            		<h3><Link to="/">{this.props.name}</Link></h3>
            		<p>
                        <Link to="/">
                            <span className="nowrap fl">{this.props.hName}</span>
                            <span className="fl">/评分:{this.props.score}/{this.props.distance}</span>
                        </Link>
                    </p>
            		<h4><span>¥</span>{this.props.price}</h4>
            		<s><span>¥</span>{this.props.oldPrice}</s>
            	</div>
            </div>
        )
    }
}
export default TCDemo1