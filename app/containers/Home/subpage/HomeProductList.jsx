import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TCDemo1 from '../../../components/TCDemo1'
class HomeProductList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	let data = [
    		{
    			img:"http://www.qydjk.org/resource/front/sho/image/product/20170620/2017062013040676836581.png?v=1506649768902",
    			name:"关爱父母体检",
    			hName:"仁爱医院",
    			score:"4.5",
    			distance:"5.1km",
    			price:288,
    			oldPrice:560
    	    },
    		{
    			img:"http://www.qydjk.org/resource/front/sho/image/product/20170621/2017062101243397970916.png?v=1506649768902",
    			name:"孕前体检套餐",
    			hName:"昆明中山医院",
    			score:"4.5",
    			distance:"5.1km",
    			price:499,
    			oldPrice:1129
    	    },
    	    {
    			img:"http://www.qydjk.org/resource/front/sho/image/product/20170621/2017062103402698916879.png?v=1506649768902",
    			name:"早期怀孕与建档检查",
    			hName:"仁爱医院",
    			score:"4.5",
    			distance:"5.1km",
    			price:10,
    			oldPrice:98
    	    },
    	    {
    			img:"http://www.qydjk.org/resource/front/sho/image/product/20170620/2017062013052288021717.png?v=1506649768902",
    			name:"入职体检",
    			hName:"仁爱医院",
    			score:"4.5",
    			distance:"5.1km",
    			price:108,
    			oldPrice:298
    	    }
    	]
        return (
            <div>
            	{
            		data.map((ele,index)=>{
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
            	}
            </div>
            )
    }
}
export default HomeProductList