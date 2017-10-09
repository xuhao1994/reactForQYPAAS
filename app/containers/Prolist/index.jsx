import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HeaderDemo1 from '../../components/HeaderDemo1'
import TCDemo1 from '../../components/TCDemo1'
import './style.css'

class Prolist extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[]
        }
    }
    render() {
        return (
            <div className="ProListBox">
                <HeaderDemo1/>
                {
                    this.state.data.length
                    ?
                    this.state.data.map((ele,index)=>{
                        return <TCDemo1 
                                key={index}
                                img={ele.img} 
                                name={ele.name} 
                                score={ele.score}
                                hName={ele.hName}
                                distance={ele.distance}
                                price={ele.price}
                                oldPrice={ele.oldPrice}
                            />
                    })
                    :
                    <div>加载中...</div>
                }
            </div>
        )
    }
}
export default Prolist