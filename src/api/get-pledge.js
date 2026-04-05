async function getPledges(pledgeId) {
  const url = `${import.meta.env.VITE_API_URL}/pledges/${pledgeId}`;
  console.log(url);
  const response = await fetch(url, { method: "GET" });

  if (!response.ok) {
    const fallbackError = `Error fetching pledge with id ${pledgeId}`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default getPledges;