import useFundraisers from "../hooks/use-fundraisers";
import FundraiserCard from "../components/FundraiserCard";
import "./HomePage.css";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";

function HomePage() {
    const {fundraisers} = useFundraisers();

    return (
        <div>
            {/*<div className="heroimage"><img src = "https://images-r2-1.thebrag.com/var/uploads/2025/10/Catan-1-910x511.jpg" /></div>*/}
            <HeroImage />
            <div id ="fundraiser-list">
            {fundraisers.map((fundraiserData, key) => {
                return <FundraiserCard key={key} fundraiserData={fundraiserData} />; 
            })}
            </div>  
            <Footer />
        </div>
    );
}
export default HomePage;