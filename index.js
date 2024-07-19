require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData=
  {
    "login": "Itzraj786iul",
    "id": 175637905,
    "node_id": "U_kgDOCngFkQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/175637905?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Itzraj786iul",
    "html_url": "https://github.com/Itzraj786iul",
    "followers_url": "https://api.github.com/users/Itzraj786iul/followers",
    "following_url": "https://api.github.com/users/Itzraj786iul/following{/other_user}",
    "gists_url": "https://api.github.com/users/Itzraj786iul/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Itzraj786iul/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Itzraj786iul/subscriptions",
    "organizations_url": "https://api.github.com/users/Itzraj786iul/orgs",
    "repos_url": "https://api.github.com/users/Itzraj786iul/repos",
    "events_url": "https://api.github.com/users/Itzraj786iul/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Itzraj786iul/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2024-07-15T16:38:00Z",
    "updated_at": "2024-07-15T16:38:04Z"
  }


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('Itsraj786@iul')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login at chai and code</h1>')
})
app.get('/Youtube',(req,res)=>{
    res.send('<h2>Chai Aur Code</h2>')

})
app.get('/github',(req,res)=>{
  res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
