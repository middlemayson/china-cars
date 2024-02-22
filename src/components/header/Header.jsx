import './header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-row">
                    <NavLink to="/"><h1 className="title">Автомобили Китая</h1></NavLink>
                    
                    <button className="btn-circle search-icon"></button>
                </div>
            </div>
        </header>
    );
}
 
export default Header;