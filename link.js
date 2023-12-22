const gitHubUser = new Github();
const Ui = new UI();

document.querySelector(".user_name").addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if ((e.key === "Enter") & (userText.trim() !== "")) {
    gitHubUser
      .fetchUser(userText)
      .then((data) => {
        Ui.showProfile(data.profile);
        Ui.showRepos(data.repos);
        Ui.showChart(data.chart);
      })
      .catch((err) => {
        Ui.showAlert("User not found", "alert alert-danger");
      });
  }
});
