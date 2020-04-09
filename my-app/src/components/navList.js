import React, {Component} from 'react'

import '../styles/components.css'

export default class NavList extends Component {
  constructor() {
    super()
    this.state = {
      curIndex: 0
    }
  }
  
  selectType(index, value) {
    console.log(value)
    this.setState({
      curIndex: index,
    })
  }
  
  render() {
    const {props: {list}, state: {curIndex}} = this
    return (
      <ul className="navTitle">
        {list.map((nav, index) => {
          return (
            <li className={curIndex === index ? 'active' : ''}
                key={index}
                dangerouslySetInnerHTML={{__html: nav}}
                onClick={() => this.selectType(index, nav)}>
            </li>
          )
        })}
      </ul>
    )
  }
}