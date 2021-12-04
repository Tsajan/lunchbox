import {Layout} from 'antd';
import s from './BasePageContent.module.scss';

const {Content} = Layout;

const BasePageContent = () =>{
    return(
        <Content className={s.contentArea}>
            Dummy Content

        </Content>    
    )
}


export default BasePageContent;
