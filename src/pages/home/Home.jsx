import Cards from "../../components/cards/Cards";

const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <div className="home-page">
                    <p className="home-p">Что это за бренд? Как он называется? К какой компании относится? Ответы на эти вопросы на сайте Автомобили Китая</p>
                    <div className="row">
                        <Cards />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Home;