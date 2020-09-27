import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Avatar, Space, Button, Tooltip, Input, PageHeader, Divider } from 'antd';
import { BellOutlined, DownloadOutlined, DingtalkOutlined, CalendarOutlined, UserAddOutlined, SearchOutlined, QuestionOutlined, UserOutlined, HomeOutlined, PlusCircleOutlined, StarFilled, ApiOutlined, RobotOutlined, UsergroupAddOutlined, DashOutlined, DownOutlined, EyeInvisibleOutlined, SortDescendingOutlined, DownCircleTwoTone } from '@ant-design/icons';
import 'antd/dist/antd.css';
import ButtonMenu from './ButtonMenu';
import CustomTable from './CustomTable.js';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <div className="App">
        <Layout style={{ height: '100vh', flex: 1 }}>
          <Sider collapsed={true} >
            <div className="logo">
              <Avatar size={40}  src={process.env.PUBLIC_URL + '/logo_icon.png'} />
            </div>
            <Space direction="vertical" size="large">
              <Menu theme="dark" >
                <Menu.Item key="1" style={{ padding: 0, marginLeft: '35%' }} icon={<BellOutlined style={{ fontSize: '24px' }} />}>
                  Notifications
                </Menu.Item>
                <Menu.Item key="2" style={{ padding: 0, marginLeft: '35%' }} icon={<DownloadOutlined style={{ fontSize: '24px'}} />}>
                  Inbox
                </Menu.Item>
              </Menu>
            </Space>
              
            <div className="upgrade-button">
              <DingtalkOutlined style={{ paddingRight: '6px', color: 'white', marginTop: '25px' }} />
              <span style={{ color: 'white' }}>Upgrade</span>
            </div>

            <Space direction="vertical" size="large" style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 20, left: 0}}>
              <Menu theme="dark" >
                <Menu.Item key="1" style={{ padding: 0, marginLeft: '35%' }} icon={<CalendarOutlined style={{ fontSize: '24px' }} />}>
                  My Week
                </Menu.Item>
                <Menu.Item key="2" style={{ padding: 0, marginLeft: '35%' }} icon={<UserAddOutlined style={{ fontSize: '24px'}} />}>
                  Invite Members
                </Menu.Item>
                <Menu.Item key="3" style={{ padding: 0, marginLeft: '35%' }} icon={<SearchOutlined style={{ fontSize: '24px'}} />}>
                  Search Everything
                </Menu.Item>
                <Menu.Item key="4" style={{ padding: 0, marginLeft: '35%' }} icon={<QuestionOutlined style={{ fontSize: '24px'}} />}>
                  Help
                </Menu.Item>
                <Avatar size={50} style={{ padding: 0, marginLeft: '20%', }} icon={ <Tooltip title="Harshith R" placement="left"> <UserOutlined /> </Tooltip>  } />
              </Menu>
            </Space>
          </Sider>
          
          <Sider theme="light" style={{ backgroundColor: 'white' }} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
      
            <Menu  mode="inline">
              <Menu.Item key="1" style={{ fontSize: '24px', fontWeight: 500 }}>
                Workspaces
              </Menu.Item>
              <Menu.Item key="2" >
                <Input style={{ padding: 0, left: 0 }} placeholder="Filter boards..." bordered={false} prefix={ <SearchOutlined /> } />
              </Menu.Item>
              <Menu.Item key="3" icon={<PlusCircleOutlined />} >
                Add
              </Menu.Item>
              <SubMenu key="sub1" icon={<HomeOutlined />} title="Main" style={{ fontSize: '16px' }}>
                <Menu.Item key="4">Web Design</Menu.Item>
                <Menu.Item key="5">REACT JS</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Layout className="site-layout">
            <Header className="site-layout-background">
              <div style={{ textAlign: 'left', width: '100%',}}>
                <PageHeader
                  className="site-page-header-responsive"
                  title={<h1 style={{ fontSize: '30px', marginTop: '5px'}}>Web Design</h1>}
                  subTitle={<StarFilled style={{ fontSize:"20px", color: 'lightgray', }} />}
                  extra={[
                    <Button style={{ border: 0 }}><a href="https://github.com/harshithr"><img src={process.env.PUBLIC_URL + '/avatar+.png'} width="52" /></a></Button>,
                    <Button shape="round" size="large" type="default"><ApiOutlined />/ 0</Button>,
                    <Button shape="round" size="large" type="default"><RobotOutlined />/ 0</Button>,
                    <Button shape="round" size="large" type="default"><img src={process.env.PUBLIC_URL + '/zoom.png'} width="20" style={{ marginRight: 5}} />Start Zoom call</Button>,
                    <Button size="large" type="default"><UsergroupAddOutlined /> / 1 <Divider type="vertical" /> Activities / 0</Button>,
                    <Button style={{ border: 0 }}><a href="https://github.com/harshithr"><DashOutlined /></a></Button>,

                  ]}
                >
              </PageHeader>
              
              </div>
              
            </Header>
            <div style={{ backgroundColor: '#ffffff' }}>
            <Input style={{ marginLeft: '15px', }} placeholder="Add board description" bordered={false}/>
            </div>
            <Content className="site-layout-background" style={{ padding: 0, top: '0%' }} >
						<PageHeader
                  className="site-page-header-responsive"
                  title={<ButtonMenu />}
                  extra={[
                    <Button shape="round" type="primary">New Item<Divider style={{ color: 'white' }} type="vertical" /><DownOutlined /></Button>,
                    <Input placeholder="Search / Filter Board" style={{ borderRadius: '20px', width: '200px' }} />,
                    <Button shape="circle-outline" type="default"><UserAddOutlined /></Button>,
                    <Button style={{ border: 0 }}><EyeInvisibleOutlined /></Button>,
                    <Button style={{ border: 0 }}><SortDescendingOutlined /></Button>,
										
                  ]}
                >
              </PageHeader>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <h1 style={{ textAlign: 'start', color: 'lightskyblue' }}><DownCircleTwoTone /> Things to do</h1>
                <CustomTable />
              </div>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <h1 style={{ textAlign: 'start', color: 'lightskyblue' }}><DownCircleTwoTone /> Done</h1>
                <CustomTable />
              </div>
            </Content>
          </Layout>
        </Layout>

        
      </div>
    );
  }
}

export default App;
