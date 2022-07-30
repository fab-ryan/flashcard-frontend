import { Header } from "../../components";
import "./home.css"

function Home() {
    return <div className="home">
        <Header />
        <div className="all-card">

            <div className="single">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className=" bg-green-500 w-44">Checking the Queston </div>
                    </div>
                    <div className="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
export default Home;
