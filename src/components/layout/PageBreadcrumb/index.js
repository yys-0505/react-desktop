import React from 'react'
import { withRouter } from 'react-router-dom'
import menuConfig from '../PageSider/config'
import { Breadcrumb } from 'antd';

const PageBreadcrumb = (props) => {
  const { location } = props;
  let pathname = location.pathname;
  if (pathname === '/') {
    pathname = "/app/menu1/sub1/opt1";
  }
  let pathSnippets = pathname.match(/\/\w+/g);//["app/", "/menu1", "/sub1", "opt1"]
  
  let menuLevel1, menuLevel2, menuLevel3;
  for (let i = 0; i < pathSnippets.length; i++) {
    if (i === 0) {
      menuLevel1 = menuConfig.find(item => {
        return item.key === (pathSnippets[i] + pathSnippets[i + 1]);
      });
    } else if (i === 2) {
      menuLevel2 = menuLevel1.items.find(item => {
        return item.key === pathSnippets[i]
      });
    } else if (i === 3) {
      menuLevel3 = menuLevel2.items.find(item => {
        return item.key === pathSnippets[i]
      });
    }
  }
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>{menuLevel1 ? menuLevel1.name : ""}</Breadcrumb.Item>
      <Breadcrumb.Item>{menuLevel2 ? menuLevel2.name : ""}</Breadcrumb.Item>
      <Breadcrumb.Item>{menuLevel3 ? menuLevel3.name : ""}</Breadcrumb.Item>
    </Breadcrumb>
  )
};

export default withRouter(PageBreadcrumb);