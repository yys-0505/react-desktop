import React, { Component } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;
class PageHeader extends Component {
  render () {
    return (
      <Header className="header">
        <div className="logo" />
        <h1 className="title" style={{color: '#fff'}}>后台管理</h1>
      </Header>
    )
  }
}

export default PageHeader;