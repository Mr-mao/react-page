import React, {Component} from 'react'

import '../styles/components.css'

export default class NavList extends Component {
  constructor() {
    super()
  }
  
  render() {
    return (
     <div className="search-box">
       {/*<span className="search-topic">请输入职位关键词</span>*/}
       <div className="filter"></div>
       <input className="search-text" type="text" maxLength="30" placeholder="请输入职位关键词"/>
       <input className="search-btn" type="submit" value="搜索"/>
     </div>
    )
  }
}