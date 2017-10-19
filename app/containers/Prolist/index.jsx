import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HeaderDemo from '../../components/HeaderDemo'
import TCDemo1 from '../../components/TCDemo1'
import {getProListData} from '../../fetch/productList/productList.js'
import LoadMore from '../../components/LoadMore'
import NoMore from '../../components/NoMore'
import BackArrow from '../../components/BackArrow'
import SearchInput from '../../components/searchInput'
import {connect} from 'react-redux'
import './style.css'

class Prolist extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[],
            hasMore:false,
            isLoadingMore:false,
            page:1
        }
    }
    render() {
        return (
            <div className="ProListBox">
                <HeaderDemo>
                    <BackArrow/>
                    <SearchInput placeholder="请输入搜索套餐名字"/>
                </HeaderDemo>
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
                {
                    this.state.hasMore
                    ?<LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    :<NoMore/>
                }
            </div>
        )
    }
    componentDidMount(){
        this.loadFirstPageData()
    }
    loadFirstPageData(){
        const cityName = this.props.userinfo.cityName;
        const result = getProListData(cityName,0);
        this.showData(result);
    }
    loadMoreData(){
        this.setState({
            isLoadingMore:true
        })
        const cityName = this.props.userinfo.cityName;
        const page = this.state.page;
        const result = getProListData(cityName,page);
        function callback(){
            this.showData(result)
            this.setState({
                isLoadingMore:false,
                page:page+1
            })
        }
        setTimeout(callback.bind(this), 1000)
    }
    showData(data){
        data.then(res=>{
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



function mapStateToProps(state){
    return{
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return{}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Prolist);