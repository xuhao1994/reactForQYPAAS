import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class HomeJgBox extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	let data = [
    		{img:"http://www.qydjk.org/resource/front/sho/image/shopInfo/20170620/2017062019304710488860.png?v=1506501872107",name:"仁爱医院"},
    		{img:"http://www.qydjk.org/resource/front/sho/image/shopInfo/20170620/dsryy.jpg?v=1506501872107",name:"昆明市第三人民医院"},
    		{img:"http://www.qydjk.org/resource/front/sho/image/shopInfo/20170620/2017062019261605322764.png?v=1506501872107",name:"昆明中山医院"},
    		{img:"http://www.qydjk.org/resource/front/sho/image/shopInfo/20170620/2017062019290257843909.png?v=1506501872107",name:"昆明仁康体检中心"},
    		{img:"http://www.qydjk.org/resource/front/sho/image/shopInfo/20170728/2017072815311247155020.png?v=1506501872107",name:"昆明市东大肛肠医院"},
    		{img:"http://www.qydjk.org/resource/front/sho/image/shopInfo/20170728/2017072815501729215494.png?v=1506501872107",name:"云南省皮肤病医院"},
    		{img:"http://www.qydjk.org/resource/front/sho/image/shopInfo/20170728/2017072815540811089276.png?v=1506501872107",name:"昆明医科大学第二附属医院"},
    		{img:"http://www.qydjk.org/resource/front/sho/image/shopInfo/20170728/2017072814482174933413.png?v=1506501872107",name:"昆明健之佳体检中心"}
    	]
        return (
            <h1>404 not found page</h1>
        )
    }
}
export default HomeJgBox