import React, {Component} from 'react'
import Search from '../components/search'
import NavList from '../components/navList'

import '../styles/main.css'

export default class Nav extends Component {
  constructor() {
    super()
    this.state = {
      list: ['JAVA', 'IOS', '数据', '安全', '搜索', '算法', '运营', '视觉', '交互', '前端']
    }
  }
  
  render() {
    return (
      <div className="contain">
        <img className="contain-image"
             src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt=""/>
        <div className="contain-filter"></div>
        <div className="contain-box">
          <div className="box">
            <p className="word">If not now, when?</p>
            <p className="word">If not me, who?</p>
            <p className="font">此时此刻，非我莫属！</p>
            <Search></Search>
            <div className="hot-box">
              <span className="hot-search">热门搜索:</span>
              <NavList list={this.state.list}></NavList>
            </div>
          </div>
        </div>
      </div>
    )
  }
}