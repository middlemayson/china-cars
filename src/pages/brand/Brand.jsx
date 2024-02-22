import './brands.css';
import '../company/companyList';

const Brand = ({title, desc, imgCar, imgLogo, linkDiller, linkDetails}) => {
    

        return (
            
                <div className="card">
                    <img className="card__img" src={imgCar} alt={title} />
                    <div className="card__body">
                        <img className='card__imgLogo' src={imgLogo} alt={title} />
                        <div className="card__text">
                            <div className="card__title">
                                {title}
                            </div>
                            <div className="card__muted">
                                {desc}
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="card__btn-sector">
                                <a href={linkDetails} className="btn">Подробнее</a>
                                <a href={linkDiller} className="btn btn-red">Диллер в РК</a>
                        </div>
                </div>
            
    );
}
 
export default Brand;