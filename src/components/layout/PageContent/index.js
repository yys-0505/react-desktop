import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
import routes from '../../../router'

const { Content } = Layout;
class PageContent extends Component {
  render () {
    return (
      <Content style={{
        background: '#fff', padding: 24, margin: 0, minHeight: 280,
      }}
      >
        <Switch>
          {
            routes.map((route, index) => {
              return <Route key={index} exact path={route.path} render={props => (
                      <route.component {...props} routes={route.routes} />
                    )}
              />
            })
          }
        </Switch>
      </Content>
    )
  }
}

export default PageContent;