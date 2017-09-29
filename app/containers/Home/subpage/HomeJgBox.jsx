import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'
import './style.css'


class HomeJgBox extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	let data = [
    		{img:"http://www.qydjk.org/resource/front/sho/image/shopInfo/20170620/2017062019304710488860.png?v=1506501872107",name:"仁爱医院",src:"/"},
    		{img:"http://www.qydjk.org/resource/front/sho/image/shopInfo/20170620/dsryy.jpg?v=1506501872107",name:"昆明市第三人民医院",src:"/"},
    		{img:"http://www.qydjk.org/resource/front/sho/image/shopInfo/20170620/2017062019261605322764.png?v=1506501872107",name:"昆明中山医院",src:"/"},
    		{img:"http://www.qydjk.org/resource/front/sho/image/shopInfo/20170620/2017062019290257843909.png?v=1506501872107",name:"昆明仁康体检中心",src:"/"},
    		{img:"http://www.qydjk.org/resource/front/sho/image/shopInfo/20170728/2017072815311247155020.png?v=1506501872107",name:"昆明市东大肛肠医院",src:"/"},
    		{img:"http://www.qydjk.org/resource/front/sho/image/shopInfo/20170728/2017072815501729215494.png?v=1506501872107",name:"云南省皮肤病医院",src:"/"},
    		{img:"http://www.qydjk.org/resource/front/sho/image/shopInfo/20170728/2017072815540811089276.png?v=1506501872107",name:"昆明医科大学第二附属医院",src:"/"},
    		{img:"http://www.qydjk.org/resource/front/sho/image/shopInfo/20170728/2017072814482174933413.png?v=1506501872107",name:"昆明健之佳体检中心",src:"/"}
    	]
        return (
            <div className="clearfix jgBox">
            	{
            		data.map((ele,index)=>{
            			return <div key={index} className="jgBoxItem"><Link to={ele.src}><img src={ele.img} alt=""/><span className="nowrap">{ele.name}</span></Link></div>
            		})
            	}
            </div>
        )
    }
}

export default HomeJgBox