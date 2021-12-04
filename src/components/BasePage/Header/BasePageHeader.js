import { Layout, Input, Button } from 'antd';
import s from './BasePageHeader.module.scss';
import { t } from 'i18next';
import { ReactComponent as MapMarkerSVG } from '../../../assets/mapmarker.svg';

const { Header } = Layout;
const { Search } = Input;

const BasePageHeader = () => {
    return (
        <Header className={s.headerContainer}>
            <div className={s.logo}>
                {t("title")}
            </div>
            <div className={s.deliveryBar}>
                {t("deliverMessage")}
                <MapMarkerSVG className={s.marker} />
            </div>
            <div className={s.searchBoxWrapper}>
                <Search className={s.searchBox} size='large' placeholder={t("text.search")} allowClear onSearch={() => { console.log("Handle search here") }} />
            </div>
            <div className={s.loginBtn}>
                <Button size='large' type="primary">{t("login")}</Button>
            </div>
        </Header>
    )
}


export default BasePageHeader;





