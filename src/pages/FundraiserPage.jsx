
import { useParams } from "react-router-dom";
import useFundraiser from "../hooks/use-fundraiser";
import useUser from "../hooks/use-user";

function PledgeItem({ pledgeData }) {
  const { user: supporter } = useUser(pledgeData.supporter);

  return (
    <li key={pledgeData.id}>
      {pledgeData.amount} from {supporter?.first_name} {supporter?.last_name}
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
    <div>
      <img src={fundraiser.image} alt={fundraiser.description || "Fundraiser image"} />
      <h2>{fundraiser.title}</h2>
      <h3>Created by {user?.first_name} {user?.last_name}</h3>
      <h3>This fundraiser is {statusLabel}.</h3>
      <h3>Pledges</h3>
      <p>
        {fundraiser.pledges.map((pledgeData) => (
          <PledgeItem key={pledgeData.id} pledgeData={pledgeData} />
        ))}
      </p>
    </div>
  );
}

export default FundraiserPage;
