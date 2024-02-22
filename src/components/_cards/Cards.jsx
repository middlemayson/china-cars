// import { useParams } from "react-router-dom";

import Card from "./Card";

import geelyLogo from '../../img/logo/company/Geely.png';
import cheryLogo from '../../img/logo/company/Chery.png';
import gwmLogo from '../../img/logo/company/gwm.png';
import bydLogo from '../../img/logo/company/BYD.png';
import baicLogo from '../../img/logo/company/BAIC.png';
import dfmLogo from '../../img/logo/company/dfm.png';
import fawLogo from '../../img/logo/company/FAW_Group.png';
import gacLogo from '../../img/logo/company/GAC_Group.png';
import changanLogo from '../../img/logo/company/Changan.png';
import youtongLogo from '../../img/logo/company/Yutong.png';
import jacLogo from '../../img/logo/company/jac_group.png';
import zxLogo from '../../img/logo/company/ZX_AUTO.png';
import liLogo from '../../img/logo/company/Li_Auto.png';
import saicLogo from '../../img/logo/company/SAIC-Motor.png';

import './cards.css';

const Cards = () => {
    return (
        <section className="cards">
            
                <div className="row__cards">
                    <Card title='Zhejiang Geely Holding Group' desc='' link='#!' img={geelyLogo} />
                    <Card title='Chery Automobile' desc='' link='#!' img={cheryLogo} />
                </div>
                <div className="row__cards">
                    <Card title='Great Wall Motors' desc='' link='#!' img={gwmLogo} />
                    <Card title='BYD Co Ltd' desc='' link='#!' img={bydLogo} />
                </div>
                <div className="row__cards">
                    <Card title='BAIC Group' desc='' link='#!' img={baicLogo} />
                    <Card title='Dongfeng Motor Corporation' desc='' link='#!' img={dfmLogo} />
                </div>
                <div className="row__cards">
                    <Card title='Changan Automobile Group' desc='' link='#!' img={changanLogo} />
                    <Card title='JAC Motors' desc='' link='#!' img={jacLogo} />
                </div>
                <div className="row__cards">
                    <Card title='Zhengzhou Yutong Group Co., Ltd.' desc='' link='#!' img={youtongLogo} />
                    <Card title='Hebei Zhongxing Automobile Co Ltd' desc='' link='#!' img={zxLogo} />
                </div>
                <div className="row__cards">
                    <Card title='China FAW Group Co., Ltd.' desc='' link='#!' img={fawLogo} />
                    <Card title='GAC Group' desc='' link='#!' img={gacLogo} />
                </div>
                <div className="row__cards">
                    <Card title='Li Auto' desc='' link='#!' img={liLogo} />
                    <Card title='SAIC Motor' desc='' link='#!' img={saicLogo} />
                </div>
            
            
            
        </section>
    );
}
 
export default Cards;