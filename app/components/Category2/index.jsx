import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import {Link} from 'react-router'
import './style.css'

class CategoryEnter extends React.Component {
    /*
    轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe 根据其文档要求需要安装插件，
    即`npm install react swipe-js-iso react-swipe --save`，这个插件的日常使用我已经验证过，大家可放心使用
    */
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0,
            height: '200px'
        }
    }
    render() {
        const opt = {
            callback: function (index,elem) {
                // 更新当前轮播图的index
                this.setState({index: index,height:elem.clientHeight+"px"});
            }.bind(this)
        }

        return (
            <div id="home-categoryEnter">
                <ReactSwipe swipeOptions={opt}>
                    <div className="quickEnter" >
                            <Link to="/"><span className='ruzhitijian'></span><b>入职体检</b></Link>
                            <Link to="/"><span className='changguitijian'></span><b>常规体检</b></Link>
                            <Link to="/"><span className='zhonglaoniantijian'></span><b>中老年体检</b></Link>
                            <Link to="/"><span className='nanxingtijian'></span><b>男性体检</b></Link>
                            <Link to="/"><span className='nvxingtijian'></span><b>女性体检</b></Link>
                            <Link to="/"><span className='youshengyouyu'></span><b>优生优育</b></Link>
                            <Link to="/"><span className='hunqiantijian'></span><b>婚前体检</b></Link>
                            <Link to="/"><span className='qingshaoniantijian'></span><b>青少年体检</b></Link>
                    </div>
                    <div className="quickEnter">
                            <Link to="/"><span className='ruzhitijian'></span><b>入职体检</b></Link>
                            <Link to="/"><span className='changguitijian'></span><b>常规体检</b></Link>
                            <Link to="/"><span className='zhonglaoniantijian'></span><b>中老年体检</b></Link>
                            <Link to="/"><span className='nanxingtijian'></span><b>男性体检</b></Link>
                            <Link to="/"><span className='ruzhitijian'></span><b>入职体检</b></Link>
                            <Link to="/"><span className='changguitijian'></span><b>常规体检</b></Link>
                            <Link to="/"><span className='zhonglaoniantijian'></span><b>中老年体检</b></Link>
                            <Link to="/"><span className='nanxingtijian'></span><b>男性体检</b></Link>
                    </div>
                </ReactSwipe>
               <div className="index-container">
                    <span className={(this.state.index == 0||this.state.index == 2) ? "selected" : ''}></span>
                    <span className={(this.state.index == 1||this.state.index == 3) ? "selected" : ''}></span>
                </div>
            </div>
        )
    }
    componentDidUpdate(){
        
    }
}

export default CategoryEnter