import { Link } from "react-router-dom";
import "../index.css";

function FundraiserCard(props) {
    const { fundraiserData } = props;
    const fundraiserLink = `/fundraiser/${fundraiserData.id}`;
    return (
        <div className="fundraiser-card">
            <Link to={fundraiserLink}>
            <img src={fundraiserData.image} alt={fundraiserData.title}/>
            </Link>
            <h3>{fundraiserData.title}</h3>
            <p>{fundraiserData.description}</p>
        </div>
    )
}

export default FundraiserCard;