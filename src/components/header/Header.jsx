import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-row">
                    <h1 className="title">Автомобили Китая</h1>
                    <button className="btn-circle search-icon"></button>
                </div>
            </div>
        </header>
    );
}
 
export default Header;