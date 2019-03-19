import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
import routes from '../../../router'
import PrivateRoute from '../../../router/auth2'
import _css from './style.module.scss'

const { Content } = Layout;

const PageContent = () => {
  return (
    <Content className={_css["content-wrapper"]}>
      <Switch>
        {
          routes.map((route1) => {
            if (route1.routes) {
              return route1.routes.map(route2 => {
                if (route2.component) {
                  return <PrivateRoute
                    key={route1.key + route2.key}
                    path={route1.path+route2.path}
                    component={route2.component}
                  />
                } else if (route2.routes) {
                  return route2.routes.map(route3 => {
                    return <PrivateRoute
                      key={route1.key + route2.key + route3.key}
                      path={route1.path+route2.path+route3.path}
                      component={route3.component}
                    />
                  })
                }
              });
            } else {
              return <Route key={route1.key} component={route1.component} />
            }
          })
        }
      </Switch>
    </Content>
  )
};

export default PageContent;