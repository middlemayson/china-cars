import {companyList} from './companyList';
import Company from './Company';
import Banner from '../../components/banner/Banner';

import './company.css';

const Companies = () => {
    return (
    <section className="company-page">
        <div className="container">
            <Banner />
            <p className="home-p">Что это за бренд? Как он называется? К какой компании относится? Ответы на эти вопросы на сайте <strong>Автомобили Китая</strong></p>
            <p className="home-p">Ниже представлены автомобильные компании Китая. Нажмите на любую из них, чтобы узнать, какие бренды входят в её состав.</p>
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