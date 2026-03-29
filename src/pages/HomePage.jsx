import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import "./HomePage.css";

function HomePage() {
    return (
        <div>
            {/*<div className="heroimage"><img src = "https://images-r2-1.thebrag.com/var/uploads/2025/10/Catan-1-910x511.jpg" /></div>*/}
            <HeroImage />
            <Footer />
        </div>
    );
}
export default HomePage;