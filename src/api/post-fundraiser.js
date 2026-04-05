async function postFundraiser({ title, description, goal, image, is_open }) {
  const url = `${import.meta.env.VITE_API_URL}/fundraisers/`;
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
      title,
      description,
      goal,
      image,
      is_open,
    }),
  });

  if (!response.ok) {
    const fallbackError = `Error in creating new fundraiser`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default postFundraiser;