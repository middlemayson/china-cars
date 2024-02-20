// import { NavLink } from "react-router-dom";
import {companyList} from './companyList';
import Company from './Company';

const Companies = () => {
    return (
    <section className="company-page">
        <div className="container">
            <div className="brand__nav">
                <button className="btn-circle back-icon"></button>
                <p>Вернуться на главную</p>
            </div>
            <div className="company__card">
                {companyList.map((company) => {
                    return <Company title={company.title} photo={company.logo} desc={company.desc}/>
                })}
            </div>
        
        </div>
    </section>
    );
}
 
export default Companies;