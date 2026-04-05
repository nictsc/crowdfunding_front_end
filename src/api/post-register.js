async function postRegister({ username, password, email }) {
  const url = `${import.meta.env.VITE_API_URL}/users/`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      ...(email ? { email } : {}),
    }),
  });

  if (!response.ok) {
    const fallbackError = "Error trying to register";

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const firstError =
      data?.detail ||
      data?.message ||
      (data && typeof data === "object"
        ? Object.values(data).flat().find((value) => typeof value === "string")
        : null);

    throw new Error(firstError || fallbackError);
  }

  return await response.json();
}

export default postRegister;
