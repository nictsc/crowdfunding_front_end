async function getFundraisers() {
    // Create our URL
    const url = `${import.meta.env.VITE_API_URL}/fundraisers`

    // Next use the fetch function to call the URL
    const response = await fetch(url,{ methods: "GET"});

    // If something goes wrong with the response
    if (!response.ok) {
        const fallbackError = "Error fetching fundraisers";

        // what if the error is in converting the response into JSON
        const data = await response.json().catch(() =>{
            // raise an error
            throw new Error(fallbackError);
        });
        // check for details in JSON or raise a fallback error. this is a catch all for server errors.
        const errorMessage = data?.details ?? fallbackError;
        throw new Error (errorMessage)
    }
    // if response is ok, convert response as JSON
    return await response.json();
}
export default getFundraisers;