// import { NavLink } from "react-router-dom";
import {companyList} from './companyList';
import Company from './Company';

import './company.css';

const Companies = () => {
    return (
    <section className="company-page">
        <div className="container">
            
            <div className="company__card">
                {companyList.map((company) => {
                    return <Company key={company.ident} title={company.title} logo={company.logo} index={company.ident} />
                })}
            </div>
        
        </div>
    </section>
    );
}
 
export default Companies;