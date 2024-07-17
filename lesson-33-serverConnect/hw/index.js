
export const getMostActiveDevs = async ({ days, userId, repoId }) => {
  const response = await fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`);
  const commits = await response.json();

  const now = new Date();
  const pastDate = new Date(now);
  pastDate.setDate(now.getDate() - days);

  const filteredCommits = commits.filter(commit => {
    const commitDate = new Date(commit.commit.author.date);
    return commitDate >= pastDate;
  });

  const authorCommitCounts = {};

  filteredCommits.forEach(commit => {
    const { name, email } = commit.commit.author;
    const authorKey = `${name}|${email}`;

    if (!authorCommitCounts[authorKey]) {
      authorCommitCounts[authorKey] = { count: 0, name, email };
    }

    authorCommitCounts[authorKey].count += 1;
  });

  const sortedAuthors = Object.values(authorCommitCounts).sort((a, b) => b.count - a.count);

  return sortedAuthors;
};

// Example usage
// getMostActiveDevs({ days: 7, userId: 'facebook', repoId: 'react' })
//   .then(mostActiveDevs => console.log(mostActiveDevs))
//   .catch(error => console.error(error));