class UI {
  constructor() {
    this.profileContainer = document.querySelector(".user_informations");
    this.reposContainer = document.querySelector(".repos_list");
    this.chartContainer = document.querySelector(".chart_container");
  }

  showProfile(userData) {
    this.profileContainer.innerHTML = `
        <section class="user_information">
        <div class="user_information_left">
            <img src="${userData.avatar_url}" alt="avatar" class="user_image" />
            <a class="view_profile" href="${userData.html_url}" target="_blank">View Profile</a>
        </div>
        <div class="user_information_right">
            <div class="user_figure">
                <span class="user_figure_repos">Public Repos : ${userData.public_repos}</span>
                <span class="user_figure_gists">Public Gists : ${userData.public_gists}</span>
                <span class="user_figure_followers">Followers : ${userData.followers}</span>
                <span class="user_figure_following">Following : ${userData.following}</span>
            </div>
            <ul class="user_information_list">
                <li class="company">Company : ${userData.company}</li>
                <li class="blog">Blog : ${userData.blog}</li>
                <li class="location">Location : ${userData.location}</li>
                <li class="created_at">Member Since : ${userData.created_at}</li>
            </ul>
        </div> 
        </section>
        `;
  }

  showRepos(reposData) {
    let output = "<h2>Repositories</h2>";
    reposData.forEach((repo) => {
      output += `
        <div class="list">
            <div class="list_item">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>  
            <div class="list_item_figure">
                <span class="stars">Stars : ${repo.stargazers_count}</span>
                <span class="watchers">Watchers : ${repo.watchers_count}</span>
                <span class="forks">Forks : ${repo.forks_count}</span>
            </div>
            </div>
        </div>
        `;
    });
    this.reposContainer.innerHTML = output;
  }

  showChart(chartData) {
    this.chartContainer.innerHTML = `
    <h2>GitHub Contributions Graph</h2>
    <section>
    <img src="https://ghchart.rshah.org/5F9EA0/${chartData}"/> 
    </section>
    `;
  }

  showAlert(message, className) {}
}
