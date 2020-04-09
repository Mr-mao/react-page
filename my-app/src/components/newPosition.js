import React, {Component} from 'react'

import '../styles/components.css'

export default class NavList extends Component {
  constructor() {
    super()
  }
  
  componentDidMount() {
    this.scrollControl(this.contentNode)
  }
  
  scrollControl(node) {
    const that = this
    let time = setInterval(() => {
      node.scrollTop = node.scrollTop + 1
      if (node.clientHeight + node.scrollTop === node.scrollHeight) {
        node.scrollTop = 0
        that.props.addChildList(that, node.scrollTop)
      }
    }, 30)
    
    node.addEventListener("mouseover", function() {
      clearInterval(time);
    })

    node.addEventListener("mouseout", function() {
      time = setInterval(() => {
        node.scrollTop = node.scrollTop + 1
        if (node.clientHeight + node.scrollTop === node.scrollHeight) {
          node.scrollTop = 0
        }
      }, 30)
    })
  }
  
  render() {
    const {list} = this.props
    return (
      <div className="new-position">
        <div className="more">
          <span className="new-font">最新职位</span>
          <span className="more-font">更多</span>
        </div>
        <ul className="position-list" ref={ node => this.contentNode = node }>{
          list.map((pos, index) => {
            return (
              <li key={index}>
                <a className="positions" href="">{pos.position}</a>
                <em className="city">{pos.city}</em>
                <em className="time">{pos.time}</em>
              </li>
            )
          })
        }</ul>
      </div>
    )
  }
}