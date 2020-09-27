import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { InsertRowAboveOutlined, DownOutlined } from '@ant-design/icons';

class ButtonMenu extends Component {
  render() {
    return (
      <Dropdown overlay={menu} trigger={['click']}>
    <a style={{ color: 'black' }} className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      <InsertRowAboveOutlined /> Main Table <DownOutlined style={{ marginLeft: '3px' }} />
    </a>
  </Dropdown>
    );
  }
}

const menu = (
  <Menu>
      <Menu.Item key="0">
        <a href="https://github.com/harshithr">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://github.com/harshithr">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

export default ButtonMenu;