import './cards.css';

const Card = (props) => {
        const {title,desc,img,link} = props;

        return (
            <div className="card">
                <a href={link} className="card__link">
                    <img className="card__img" src={img} alt={title} />
                    <div className="card__body">
                        <div className="card__text">
                            <div className="card__title">
                                {title}
                            </div>
                            <div className="card__muted">
                                {desc}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
    );
}
 
export default Card;