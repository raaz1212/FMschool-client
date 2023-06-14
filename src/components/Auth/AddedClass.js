export const addClass = async (classdata) => {
  const response = await fetch(`http://localhost:5000/classdata`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
    body: JSON.stringify(classdata),
  });

  const data = await response.json();
  return data;
};

export const myClass = async (email) => {
  const response = await fetch(`http://localhost:5000/classdata/${email}`);
  const data = await response.json();
  return data;
};
