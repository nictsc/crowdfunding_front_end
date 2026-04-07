
// // This page lists all the available fundraisers.
import useFundraisers from "../hooks/use-fundraisers";
import FundraiserCard from "../components/FundraiserCard";
import Footer from "../components/Footer";
import "../index.css";

function FundraisersPage() {
  const { fundraisers } = useFundraisers();
  const displayedFundraisers = fundraisers.slice(0, 6);

  return (
    <div className="fundraisers-page">
      <main className="fundraisers-main">
        <div id="fundraiser-list">
        {displayedFundraisers.map((fundraiserData, key) => {
          return <FundraiserCard key={key} fundraiserData={fundraiserData} />;
        })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FundraisersPage;
