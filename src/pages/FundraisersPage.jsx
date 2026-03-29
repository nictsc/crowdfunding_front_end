import useFundraisers from "../hooks/use-fundraisers";
import FundraiserCard from "../components/FundraiserCard";
import Footer from "../components/Footer";
import "./HomePage.css";

function FundraisersPage() {
  const { fundraisers } = useFundraisers();

  return (
    <div>
      <div id="fundraiser-list">
        {fundraisers.map((fundraiserData, key) => {
          return <FundraiserCard key={key} fundraiserData={fundraiserData} />;
        })}
      </div>
    </div>
  );
}

export default FundraisersPage;
