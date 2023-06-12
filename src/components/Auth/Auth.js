export const getRole = async (email) => {
  if (email) {
    const res = await fetch(`http://localhost:5000/users/${email}`);
    const user = await res.json();
    return user?.role;
  }
};
