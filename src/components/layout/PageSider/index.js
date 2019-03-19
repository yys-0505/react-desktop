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
    let selectedKeys = this.props.history.location.pathname;// /app/menu1/sub1/opts
    this.setState(() => ({
      selectedKeys
    }));
    let selectedKeysArr = selectedKeys.match(/\/\w+/g);//["/app", "/menu2", "/sub1", "opt1"]
    if (selectedKeysArr) {
      for (let i=selectedKeysArr.length -2; i>0; i--) {
        let keys = "";
        let j = 0;
        while (j <= i) {
          keys += selectedKeysArr[j];
          j ++;
        }
        if (this.state.openKeys.indexOf(keys) === -1) {
          this.setState((prevState) => ({
            openKeys: [...prevState.openKeys, keys]
          }));
        }
      }
    } else {
      this.setState(() => ({
        selectedKeys: "/app/menu1/sub1/opt1",
        openKeys: ['/app/menu1', '/app/menu1/sub1']
      }));
    }
  }
  render () {
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          selectedKeys={[this.state.selectedKeys]}
          openKeys={this.state.openKeys}//与SubMenu key对应
          onOpenChange={this.onOpenChange}
          style={{ height: '100%', borderRight: 0, overflowY: 'auto' }}
        >
          { this.renderMenu() }
        </Menu>
      </Sider>
    )
  }
  renderMenu () {
    return menuList.map((level1) => {
      return (
        <SubMenu key={level1.key} title={<span><Icon type={level1.icon} />{level1.name}</span>}>
          {
            level1.items.map((level2) => {
              if (level2.items) {
                return (
                  <SubMenu key={level1.key + level2.key} title={level2.name}>
                    {
                      level2.items.map(level3 => {
                        return (
                          <Menu.Item key={level1.key + level2.key + level3.key}>
                            <Link to={level1.key + level2.key + level3.key}>{level3.name}</Link>
                          </Menu.Item>
                        )
                      })
                    }
                  </SubMenu>
                )
              } else {
                return (
                  <Menu.Item key={level1.key + level2.key}>
                    <Link to={level1.key + level2.key}>{level2.name}</Link>
                  </Menu.Item>
                )
              }
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