import React, { Component, Fragment } from 'react'

import ReactDOM from 'react-dom';
import { ReactComponent as MapMarkerSVG } from '../assets/mapmarker.svg';
import s from './BasePage.module.scss';
import { Layout, Breadcrumb, Input, Space  } from 'antd'; 

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const BasePage = () => {
    return (
        <Layout className="layout">
            <Header className={s.header}>
                <div className={s.logo}>
                    LunchBox
                </div>
                <div className={s.deliveryBar}>
                    Deliver to here
                    <MapMarkerSVG className={s.marker}/>
                </div>
                <div className={s.searchBox}>
                    <Search placeholder="input search text" allowClear onSearch={() => { console.log("Handle search here")}} />
                </div>
                <div className={s.loginBtn}>

                </div>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default BasePage