import { Menu, Icon } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class NavBar extends Component {
  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 210, height:1000 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>My React Blog</span></span>}>
          <MenuItemGroup key="g1" title="Item 1">
            <Menu.Item key="1"><Link to="/">Blog</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/new">New Post</Link></Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

export default NavBar;