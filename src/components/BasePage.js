import React, { Component, Fragment } from 'react'

import ReactDOM from 'react-dom';
import { ReactComponent as MapMarkerSVG } from '../assets/mapmarker.svg';
import s from './BasePage.module.scss';
import { Layout, Breadcrumb, Input, Button  } from 'antd'; 
import { t } from 'i18next';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const BasePage = () => {
    return (
        <Layout className="layout">
            <Header className={s.headerContainer}>
                <div className={s.logo}>
                    {t("title")}
                </div>
                <div className={s.deliveryBar}>
                    {t("deliverMessage")}
                    <MapMarkerSVG className={s.marker}/>
                </div>
                <div className={s.searchBoxWrapper}>
                    <Search className={s.searchBox} size='large' placeholder={t("text.search")} allowClear onSearch={() => { console.log("Handle search here")}} />
                </div>
                <div className={s.loginBtn}>
                    <Button size='large' type="primary">{t("login")}</Button>
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
        </Layout>
    );
}

export default BasePage