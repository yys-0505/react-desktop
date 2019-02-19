import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import { connect } from 'react-redux'
import PageHeader from './components/layout/PageHeader'
import PageSider from './components/layout/PageSider'
import PageBreadcrumb from './components/layout/PageBreadcrumb';
import PageContent from './components/layout/PageContent';
import './assets/css/index.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <Spin
          tip="Loading..."
          wrapperClassName="self-spin-wrapper"
          size="large"
          spinning={this.props.showLoading}
        >
          <Layout>
            <PageHeader />
            <Layout>
              <PageSider />
              <Layout style={{ padding: '0 24px 24px' }}>
                <PageBreadcrumb />
                <PageContent />
              </Layout>
            </Layout>
          </Layout>
        </Spin>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    showLoading: state.getIn(["page", "showLoading"])
  }
};
export default connect(mapStateToProps, null)(App);
