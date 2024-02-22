
import './companyList';
import { NavLink } from 'react-router-dom';
import './company.css';

const Company = ({title, logo, index}) => {
    return (
        <section className="company-element">
            <NavLink to={`/${index}`}>
            <div className="card">
            <img className="card__img" src={logo} alt={title} />
                    <div className="card__body">
                        <div className="card__text">
                            <div className="card__title">
                                {title}
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </NavLink>
        </section>
    );
}
 
export default Company;