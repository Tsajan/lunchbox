import React from 'react'

import BasePageContent from './Content/BasePageContent';
import BasePageFooter from './Footer/BasePageFooter';
import BasePageHeader from './Header/BasePageHeader';

import { Layout } from 'antd';

const BasePage = () => {
    return (
        <Layout className="layout">
            <BasePageHeader />

            <BasePageContent />

            <BasePageFooter />
        </Layout>
    );
}

export default BasePage;