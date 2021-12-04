import { Layout } from 'antd';
import s from './BasePageContent.module.scss';

const { Content } = Layout;

const BasePageContent = () => {
    return (
        <Content>
            <div className={s.contentArea}>
                Dummy Content
            </div>
        </Content>
    )
}


export default BasePageContent;
