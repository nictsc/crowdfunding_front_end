// This page lists all a fundraiser with its corresponding details.
import { useParams } from "react-router-dom";
import useFundraiser from "../hooks/use-fundraiser";

import useUser from "../hooks/use-user";
import Footer from "../components/Footer";

import "../index.css";

function PledgeItem({ pledgeData }) {
  const { user: supporter } = useUser(pledgeData.supporter);

  return (
    <li>
      <strong>{pledgeData.amount}</strong> from {supporter?.first_name} {supporter?.last_name}
      {pledgeData.comment ? <p>{pledgeData.comment}</p> : null}
    </li>
  );
}

function FundraiserPage() {
  // Here we use a hook that comes for free in react router called `useParams` to get the id from the URL so that we can pass it to our useFundraiser hook.
  const { id } = useParams();
  // useFundraiser returns three pieces of info, so we need to grab them all here
  const { fundraiser, user, isLoading, error } = useFundraiser(id);
  const isOpen = fundraiser?.is_open === true || fundraiser?.is_open === "true";
  const statusLabel = isOpen ? "open" : "closed";
  
  console.log(isLoading);

  if (isLoading) {
    return (<p>loading ..</p>)
  }

  if (error) {
    return (<p>{error.message}</p>)
  }

  return (
    <div className="fundraiser-page">
      <div className="fundraiser-main">
        <div className="tile">
          <img src={fundraiser.image} alt={fundraiser.description || "Fundraiser image"} />
          <h2>{fundraiser.title}</h2>
          <h3>Created by {user?.first_name} {user?.last_name}</h3>
          <h3>This fundraiser is {statusLabel}.</h3>
          <h3>Pledges</h3>
          <ul>
            {fundraiser.pledges.map((pledgeData) => (
              <PledgeItem key={pledgeData.id} pledgeData={pledgeData} />
            ))}
          </ul>
          <form className="pledge-form">
            <h3>Create a Pledge</h3>
            <p>Please sign up to create a pledge.</p>
            <div className="amount-field">
                <label htmlFor="number">Amount</label>
              <input 
                id="number" 
                type="number" 
                required
              />
            </div>
            <div className="comment-field">
              <label htmlFor="comment">Comment</label>
              <textarea
                id="comment"
                name="comment"
                rows="5"
              />
            </div>
            <button className="submit-button" type="submit">Pledge</button>
          </form>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FundraiserPage;
