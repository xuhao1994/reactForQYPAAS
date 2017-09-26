import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import {Link} from 'react-router'
import './style.css'

class Category extends React.Component {
    /*
    轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe 根据其文档要求需要安装插件，
    即`npm install react swipe-js-iso react-swipe --save`，这个插件的日常使用我已经验证过，大家可放心使用
    */
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
        const opt = {
            auto: 2500,
            callback: function (index) {
                // 更新当前轮播图的index
                console.log(index)
                this.setState({index: index});
            }.bind(this)
        }

        return (
            <div id="home-category">
                <ReactSwipe swipeOptions={opt}>
                    <div className="carousel-item">
                        <Link to="/">
                            <img src="http://www.qydjk.org/resource/front/shop/image/homeLBT/20170803/2017080310070003517800.png?v=1506415213158" />
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link to="/">
                            <img src="http://www.qydjk.org/resource/front/shop/image/homeLBT/20170803/2017080310070004687540.png?v=1506415213158" />
                        </Link>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <span className={(this.state.index == 0||this.state.index == 2) ? "selected" : ''}></span>
                    <span className={(this.state.index == 1||this.state.index == 3) ? "selected" : ''}></span>
                </div>
            </div>
        )
    }
}

export default Category