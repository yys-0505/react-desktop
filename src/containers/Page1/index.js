import React, { Component, Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import http from '../../common/js/http'
import { url1 } from '../../common/js/urls'
import _css from './style.module.scss'

class Page1 extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: []
    };
  }
  render () {
    return (
      <Fragment>
        <h2 className={_css.title}>page1</h2> <br />
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
    http.get(url1).then(res => {
      this.setState(() => ({
        list: res
      }));
    });
  }
}

export default Page1;