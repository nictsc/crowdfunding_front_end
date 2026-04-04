import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import SloganTile from "../components/SloganTile";
import "../index.css";

function HomePage() {
    return (
        <div className="home-page">
            <div className="home-main">
                <HeroImage />
                <SloganTile />
            </div>
            <Footer />
        </div>
    );
}
export default HomePage;