// remember to import the relevant css code block for the Footer.jsx
import "../index.css"
import useFundraisers from "../hooks/use-fundraisers.js"; 

function Footer() {
    const { fundraisers, isLoading, error } = useFundraisers();

    // Calculate totals - only include open fundraisers for total raised
    const totalFundraisers = fundraisers.length;
    const totalRaised = fundraisers
        .filter(fundraiser => fundraiser.is_open === true || fundraiser.is_open === "true")
        .reduce((sum, fundraiser) => {
            const fundraiserTotal = (fundraiser.pledges || []).reduce(
                (pledgeSum, pledge) => pledgeSum + pledge.amount,
                0
            );
            return sum + fundraiserTotal;
        }, 0);

    if (isLoading) return <footer><p>Loading...</p></footer>;
    if (error) return <footer><p>Error: {error.message}</p></footer>;

    return (
        <footer>
            <p>Amount Raised: ${totalRaised}, Number of Fundraisers: {totalFundraisers}</p>
        </footer>
    );
}

export default Footer;