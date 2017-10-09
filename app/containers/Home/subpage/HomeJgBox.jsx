import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'
import {getJgList} from '../../../fetch/jgList/jgList'
import './style.css'


class HomeJgBox extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[]
        }
    }
    render() {
        return (
            <div className="clearfix jgBox">
            	{
                    this.state.data.length
                    ?
            		this.state.data.map((ele,index)=>{
            			return <div key={index} className="jgBoxItem"><Link to={ele.src}><img src={ele.img} alt=""/><span className="nowrap">{ele.name}</span></Link></div>
            		})
                    :
                    <div>加载中...</div>
            	}
            </div>
        )
    }

    componentDidMount(){
        const result = getJgList()
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
                console.error("机构列表信息获取出错,",ex.message)
            }
        })
    }
}

export default HomeJgBox