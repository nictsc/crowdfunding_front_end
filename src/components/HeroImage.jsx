
import "./HeroImage.css" 

function HeroImage() {
    const imageUrl = "https://cdnb.artstation.com/p/assets/images/images/083/599/691/large/quentin-regnes-catan-pano.jpg?1736347956";
    
    return (
        <div className="hero-image">
            <img src={imageUrl} alt="Hero image" />
        </div>
    );
}

export default HeroImage;
