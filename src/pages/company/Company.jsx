import '../brand/brands.css';
import './companyList';

import logo from '../../img/logo/company/Geely.png';
import photo from '../../img/photo/Aston_Martin_DBS.jpg';


const Company = () => {
    return (
        <section className="company-element">
            <div className="container">
                
                <div className="brand__title">
                    <img className="brand__title__img" src={logo} alt="" />
                    <h1 className="title">Zhejiang Geely Holding Group</h1>
                </div>
                <img src={photo} alt="" className="brandPhoto" />
                <p className="brand__text">«Чжэцзян Цзили Холдинг Груп»</p>
            </div>
            
        </section>
    );
}
 
export default Company;