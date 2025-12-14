import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Input, Layout, theme } from 'antd';
import AppMenu from '../Menu/Menu';
import { menuItems } from '../../config/MenuConfig';
import { SearchOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";
import AppContent from '../Content/Content';
const { Header, Sider, Content } = Layout;

const Homepage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const {container, input} = styles;

  return (
   <div >
     <Layout style={{height: "100vh"}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
      <AppMenu 
        defaultSelectedKeys={['1']}
        items={menuItems} 
      />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
         <div className={container}>
           <div>
             <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
              />
              <a href="/">TRANG CHỦ</a>
           </div>
            
            <div className={input}>
              <Input placeholder="Tìm kiếm" allowClear prefix={<SearchOutlined />}/>
            </div>
         </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <AppContent/>
        </Content>
      </Layout>
    </Layout>
   </div>
  );
};

export default Homepage;