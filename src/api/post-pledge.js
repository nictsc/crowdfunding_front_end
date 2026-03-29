async function postPledge({amount, comment, anonymous, fundraiser}) {
  const url = `${import.meta.env.VITE_API_URL}/pledge/`;
  const token = window.localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Token ${token}`;
  }

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      amount,
      comment,
      anonymous,
      fundraiser
    }),
  });

  if (!response.ok) {
    const fallbackError = `Error in creating new pledge`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default postPledge;