import { allFundraisers } from "../data";
import FundraiserCard from "../components/FundraiserCard";

function HomePage() {
    return (
        <div>
            {allFundraisers.map((fundraiserData, key) => {
                return <FundraiserCard key={key} fundraiserData={fundraiserData} />; 
            })}
        </div>
    );
}
export default HomePage;