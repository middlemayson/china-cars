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
                <img src={company.photo} alt={company.title} className="brandPhoto" />
                <p className="brand__text">{company.desc}</p>
            </div>
        </section>
    );
}
 
export default CompanyOnePage;