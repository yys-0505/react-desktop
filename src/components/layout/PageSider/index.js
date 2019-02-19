import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import menuList from './config'

const { SubMenu } = Menu;
const { Sider } = Layout;

class PageSider extends Component {
  constructor (props) {
    super(props);
    this.onOpenChange = this.onOpenChange.bind(this);
    this.state = {
      selectedKeys: '',
      openKeys: []
    };
  }
  componentWillReceiveProps () {
    let selectedKeys = this.props.history.location.pathname;
    this.setState(() => ({
      selectedKeys
    }));
    let openMenu = menuList.find(menu => {
      return menu.items.find(item => {
        return item.key === selectedKeys;
      });
    });
    console.log(selectedKeys, openMenu);
    if (openMenu && this.state.openKeys.indexOf(openMenu.key) === -1) {
      this.setState((prevState) => ({
        openKeys: [...prevState.openKeys, openMenu.key]
      }));
    }
  }
  render () {
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          selectedKeys={[this.state.selectedKeys]}
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ height: '100%', borderRight: 0 }}
        >
          { this.renderMenu() }
        </Menu>
      </Sider>
    )
  }
  renderMenu () {
    return menuList.map((menu, index) => {
      return (
        <SubMenu key={menu.key} title={<span><Icon type={menu.icon} />{menu.name}</span>}>
          {
            menu.items.map((item) => {
              return (
                <Menu.Item key={item.key}>
                  <Link to={item.key}>{item.name}</Link>
                </Menu.Item>
              )
            })
          }
        </SubMenu>
      )
    });
  }
  onOpenChange (openKeys) {
    this.setState(() => ({
      openKeys
    }));
  }
}

export default withRouter(PageSider);