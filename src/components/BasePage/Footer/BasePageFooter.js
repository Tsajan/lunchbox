import { Layout } from 'antd';


const { Footer } = Layout;

const BasePageFooter = () => {
    return (
        <Footer style={{ textAlign: 'center', bottom: 0 }}>
            Lunchbox ©2022 Created by Bitsmacro.
        </Footer>
    )
}

export default BasePageFooter;