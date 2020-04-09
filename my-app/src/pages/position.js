import React, {Component} from 'react'
import NewPosition from '../components/newPosition'

import '../styles/main.css'

export default class Position extends Component {
  constructor() {
    super()
    this.state = {
      list: [
        {position: '国', city: '杭州', time: '5分钟前'},
        {position: '国际', city: '深圳', time: '5分钟前'},
        {position: '国际化中', city: '杭州', time: '5分钟前'},
        {position: '国际化中台', city: '杭州', time: '5分钟前'},
        {position: '国际化中台', city: '杭州', time: '5分钟前'},
        {position: '国际化中台-高级Java开发工程师/技术专家-深圳', city: '杭州', time: '5分钟前'},
        {position: '国际化中台-家-深圳', city: '杭州', time: '5分钟前'},
        {position: '国际化中台-高级Java开发工程师/技术专家-深圳', city: '杭州', time: '5分钟前'},
        {position: '国际化中台-高级Java开发工程师/技术专家-深圳', city: '杭州', time: '5分钟前'},
        {position: '国际化中台-高级程师/技术专家-深圳', city: '杭州', time: '5分钟前'},
        {position: '国际化中台-高级Java开发工程师/技术专家-深圳', city: '杭州', time: '5分钟前'},
        {position: '国际化中', city: '杭州', time: '5分钟前'},
        {position: '国际化中台', city: '杭州', time: '5分钟前'},
        {position: '国际化中台', city: '杭州', time: '5分钟前'},
        {position: '国际化中台-高级Java开发工程师/技术专家-深圳', city: '杭州', time: '5分钟前'},
        {position: '国际化中台-家-深圳', city: '杭州', time: '5分钟前'},
        {position: '国际化中台-高级Java开发工程师/技术专家-深圳', city: '杭州', time: '5分钟前'},
        {position: '国际化中台-高级Java开发工程师/技术专家-深圳', city: '杭州', time: '5分钟前'},
        {position: '国际化中台-高级Java开发工程师/技术专家-深圳', city: '杭州', time: '5分钟前'}
      ]
    }
    this.addChildList = this.addChildList.bind(this)
  }
  
  addChildList = (result, list) => {
    console.log(result)
  }
  
  render() {
    const {list} = this.state
    return (
      <div className="position">
        <div className="position-content">
          <NewPosition list={list} addChildList={this.addChildList}></NewPosition>
          <div className="right">
            <a className="show-pic pic-1" href="https://www.aliyun.com/careers">
              <img src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" alt=""/>
            </a>
            <a className="show-pic pic-2" href="https://job.alibaba.com/zhaopin/informationPlatformBu.htm?"
            >
              <img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt=""/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}