import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TCDemo1 from '../../../components/TCDemo1'
import {getProListData} from '../../../fetch/productList/productList'
import LoadMore from '../../../components/LoadMore'
import NoMore from '../../../components/NoMore'
class HomeProductList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[],
            hasMore:false,//是否加载更多
            isLoadingMore:false,//是否显示加载更多
            page:1 //下一页,默认第二页
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
                {
                    this.state.hasMore
                    ?<LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    :<NoMore/>
                }
            </div>
            )
    }

    componentDidMount(){
        //获取套餐数据
        this.loadFirstPageData()
    }

    loadFirstPageData(){
        //首屏数据
        const cityName = this.props.cityName;
        const result = getProListData(cityName,0);
        this.showData(result);
    }

    loadMoreData(){
        //加载更多
        this.setState({
            isLoadingMore:true
        })
        const cityName = this.props.cityName
        const page = this.state.page
        const result = getProListData(cityName,page)
        function callback(){
            this.showData(result)
            this.setState({
                isLoadingMore:false,
                page:page+1
            })
        }
        //数据展示延迟2秒
        setTimeout(callback.bind(this), 2000) 
    }

    showData(data){
        data.then((res)=>{
            return res.json()
        }).then((json)=>{
            this.setState({
                data:this.state.data.concat(json.data),
                hasMore:json.hasMore
            })
        }).catch((ex)=>{
            if(__DEV__){
                console.error("套餐列表信息获取出错,",ex.message)
            }
        })
    }


}
export default HomeProductList