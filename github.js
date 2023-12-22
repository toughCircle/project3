class Github {
  constructor() {
    this.baseUrl = "https://api.github.com/users";
  }

  async fetchUser(username) {
    const profileResponse = await fetch(`${this.baseUrl}/${username}`);
    const profile = await profileResponse.json();

    if (profileResponse.status !== 200) {
      throw new Error("user not found");
    }

    const reposResponse = await fetch(profile.repos_url);
    const repos = await reposResponse.json();

    const chart = username;

    return { profile, repos, chart };
  }
}
