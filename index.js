require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;
const githubData = {
  login: "Sourabhjaiswal12016",
  id: 124076587,
  node_id: "U_kgDOB2VCKw",
  avatar_url: "https://avatars.githubusercontent.com/u/124076587?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Sourabhjaiswal12016",
  html_url: "https://github.com/Sourabhjaiswal12016",
  followers_url: "https://api.github.com/users/Sourabhjaiswal12016/followers",
  following_url:
    "https://api.github.com/users/Sourabhjaiswal12016/following{/other_user}",
  gists_url: "https://api.github.com/users/Sourabhjaiswal12016/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Sourabhjaiswal12016/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/Sourabhjaiswal12016/subscriptions",
  organizations_url: "https://api.github.com/users/Sourabhjaiswal12016/orgs",
  repos_url: "https://api.github.com/users/Sourabhjaiswal12016/repos",
  events_url:
    "https://api.github.com/users/Sourabhjaiswal12016/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Sourabhjaiswal12016/received_events",
  type: "User",
  site_admin: false,
  name: "Sourabh Jaiswal",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "👋 Hi, I’m @sourabhjaiswal12016\r\n👀 I’m interested in WebDev\r\n🌱 I’m currently learning DSA",
  twitter_username: null,
  public_repos: 19,
  public_gists: 0,
  followers: 4,
  following: 4,
  created_at: "2023-01-31T16:45:29Z",
  updated_at: "2024-07-05T08:25:05Z",
};
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("I am on the Twitter Page");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>I am on the Youtube Page</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});
app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${port} `);
});
