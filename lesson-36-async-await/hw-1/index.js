export const getUsersBlogs = async (users) => {
  try {
    const requests = users.map(user => fetch(`https://api.github.com/users/${user}`).then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      return response.json();
    }));

    const usersData = await Promise.all(requests);
    return usersData.map(userData => userData.blog);
  } catch (error) {
    throw new Error('Failed to fetch data for one or more users');
  }
};

