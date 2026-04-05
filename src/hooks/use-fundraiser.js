
import { useState, useEffect } from "react";
import getUser from "../api/get-user";
import getFundraiser from "../api/get-fundraiser";

export default function useFundraiser(fundraiserId) {
  const [fundraiser, setFundraiser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(); 
  const [error, setError] = useState();

  useEffect(() => {
    // Here we pass the fundraiserId to the getFundraiser function.
    getFundraiser(fundraiserId)
      .then((fundraiser) => {
        setFundraiser(fundraiser);
        setIsLoading(false);
        return getUser(fundraiser.owner);
      })
      .then((userData) => {
        setUser(userData);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });

    // This time we pass the fundraiserId to the dependency array so that the hook will re-run if the fundraiserId changes.
  }, [fundraiserId]);

  return { fundraiser, user, isLoading, error };
}