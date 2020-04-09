import React, { Component } from 'react'
import NavList from '../components/navList'

import '../styles/main.css'

export default class Nav extends Component{
  constructor() {
    super()
    this.state = {
      list: ['首 &nbsp;&nbsp;页', '社会招聘', '校园招聘', '了解阿里', '个人中心']
    }
  }
  render() {
    return (
      <div className="head">
        <div className="main">
          <img className="logo" src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png"
               alt=""/>
          <i className="fontA">|</i>
          <i className="fontB">社招官网</i>
          <NavList list={this.state.list}></NavList>
          <div className="login">
            欢迎来到阿里巴巴集团招聘！&nbsp;
            <a href="">登录</a> | <a href="">注册</a>
          </div>
        </div>
      </div>
    )
  }
}