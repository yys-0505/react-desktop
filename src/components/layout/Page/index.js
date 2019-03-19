import React from 'react'
import { Layout, Spin } from 'antd';
import { connect } from 'react-redux'
import PageHeader from '../PageHeader'
import PageSider from '../PageSider'
import PageBreadcrumb from '../PageBreadcrumb';
import PageContent from '../PageContent';

const Home = (props) => {
  return (
    <Spin
      tip="Loading..."
      wrapperClassName="self-spin-wrapper"
      size="large"
      spinning={props.showLoading}
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
  )
};
const mapStateToProps = (state) => {
  return {
    showLoading: state.getIn(["page", "showLoading"])
  }
};

export default connect(mapStateToProps, null)(Home);