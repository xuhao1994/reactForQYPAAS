import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TCDemo1 from '../../../components/TCDemo1'
import {getProListData} from '../../../fetch/productList/productList'


class HomeProductList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[]
        }
    }
    render() {
        return (
            <div>
            	{
                    this.state.data.length
            		?this.state.data.map((ele,index)=>{
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
                    :<div>加载中...</div>
            	}
            </div>
            )
    }

    componentDidMount(){
        //获取广告数据
        const result = getProListData()
        result.then(res=>{
            return res.json()
        }).then(json=>{
            const data = json.data
            if(data.length){
                this.setState({
                    data:data
                })
            }
        }).catch(ex=>{
            if(__DEV__){
                console.error("套餐列表信息获取出错,",ex.message)
            }
        })
    }



}
export default HomeProductList