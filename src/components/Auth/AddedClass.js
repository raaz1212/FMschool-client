export const addClass = async (classdata) => {
  const response = await fetch(
    `https://radio-jockey-server.vercel.app/classdata`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify(classdata),
    }
  );

  const data = await response.json();
  return data;
};

export const myClass = async (email) => {
  const response = await fetch(
    `https://radio-jockey-server.vercel.app/classdata/${email}`
  );
  const data = await response.json();
  return data;
};
