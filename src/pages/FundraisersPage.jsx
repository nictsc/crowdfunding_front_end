
// // This page lists all the available fundraisers.
import useFundraisers from "../hooks/use-fundraisers";
import FundraiserCard from "../components/FundraiserCard";
import Footer from "../components/Footer";
import "../index.css";

function FundraisersPage() {
  const { fundraisers } = useFundraisers();

  return (
    <div>
      <div id="fundraiser-list">
        {fundraisers.map((fundraiserData, key) => {
          return <FundraiserCard key={key} fundraiserData={fundraiserData} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default FundraisersPage;
