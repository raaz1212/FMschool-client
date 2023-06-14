export const getRole = async (email) => {
  if (email) {
    const res = await fetch(
      `https://radio-jockey-server.vercel.app/users/${email}`
    );
    const user = await res.json();
    return user?.role;
  }
};
