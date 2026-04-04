
import "../index.css" 
import bannerImage from "../../media/banner.png"

function HeroImage() {
    return (
        <div className="hero-image">
            <img src={bannerImage} alt="Hero banner" />
        </div>
    );
}

export default HeroImage;
