import React, { Component, Fragment } from 'react'
import http from '../../common/js/http'
import _css from './style.module.scss'

class Page111 extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: []
    };
  }
  render () {
    return (
      <Fragment>
        <h2 className={_css.title}>page111</h2> <br />
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index}>{item.name}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }
  componentDidMount () {
    http.get('taskList.json').then(res => {
      this.setState(() => ({
        list: res
      }));
    });
  }
}

export default Page111;