import { NavLink, useParams } from 'react-router-dom';
import {companyList} from '../company/companyList';
import './companyOnePage.css';


const CompanyOnePage = () => {
    const {ident} = useParams();
    const company = companyList[ident]

    return (
        <section className="company-onePage">
            <div className="container">
                <NavLink to="/" className="brand__nav">
                    <button className="btn-circle back-icon"></button>
                    <p>Вернуться на главную</p>
                </NavLink>
                <div className="brand__title">
                    <img className="brand__title__img" src={company.logo} alt={company.title} />
                    <h1 className="title">{company.title}</h1>
                </div>
                <div className="company__about">
                    <img src={company.photo} alt={company.title} className="brandPhoto" />
                    <p className="brand__text">{company.desc}</p>
                </div>
                <h1 className="title">Бренды:</h1>
                <div className="card__brand-block">
                {company.brands.sort((a, b) => a.title.localeCompare(b.title)).map((brand, index) => (
                    <div key={index} className="card__brand">
                        <img className="card__brand__img" src={brand.imgCar} alt={brand.title} />
                        <div className="card__brand__body">
                            <img className='card__brand__imgLogo' src={brand.imgLogo} alt={brand.title} />
                            <div className="card__brand__text">
                                <div className="card__brand__title">
                                    {brand.title}
                                </div>
                                <div className="card__brand__muted">
                                    {brand.desc}
                                </div>
                            </div>
                        </div>
                        <div className="card__brand__btn-sector">
                            {brand.linkDetails && ( <a href={brand.linkDetails} className="btn" target="_blank" rel="noreferrer" >Подробнее</a>)}
                            {brand.linkDiller && (<a href={brand.linkDiller} className="btn btn-red" target="_blank" rel="noreferrer" >Диллер в Казахстане</a>)}
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}
 
export default CompanyOnePage;