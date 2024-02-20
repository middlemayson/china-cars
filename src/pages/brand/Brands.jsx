import Brand from "./Brand";

import imgPhotoAston from '../../img/photo/Aston_Martin_DBS.jpg';

import imgLogoAston from '../../img/logo/brands/AstonMartin.png';

import imgLogoGelly from '../../img/logo/company/Geely.png';

import './brands.css';

const Brands = () => {
    return (
        <section className="brand-page">
            <div className="container">
                <div className="brand__nav">
                    <button className="btn-circle back-icon"></button>
                    <p>Вернуться на главную</p>
                </div>
                <div className="brand__title">
                    <img className="brand__title__img" src={imgLogoGelly} alt="" />
                    <h1 className="title">Zhejiang Geely Holding Group</h1>
                </div>
                <img src={imgPhotoAston} alt="" className="brandPhoto" />
                <p className="brand__text">«Чжэцзян Цзили Холдинг Груп» — многопрофильная группа, созданная в 1986 году. Штаб-квартира расположена в городе Ханчжоу в провинции Чжэцзян. В списке крупнейших компаний мира Fortune Global 500 за 2022 год заняла 229-е место. Владельцем группы является китайский миллиардер Ли Шуфу.</p>
                <h1 className="title brand__text-red">Бренды</h1>
            </div>
            <div className="container">
                <Brand title='Aston Martin' desc='17% акций компании' linkDiller='#!' linkDetails='#!' imgLogo={imgLogoAston} imgCar={imgPhotoAston}/>
            </div>
        </section>
    );
}
 
export default Brands;