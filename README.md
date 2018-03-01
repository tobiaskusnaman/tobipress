# tobiPress
## Routes API
List of server routes:

|Route|HTTP|Description|
|-|-|-|
|/api/user/login|POST|User login
|/api/user/register|POST|Create a user
|/api/user/:id|GET|Find User
|/api/articles|GET|Read all articles
|/api/articles/create|POST|Create a new post
|/api/articles/:articleId|GET|Find article by article id
|/api/articles/:articleId|PUT|Edit article by article id
|/api/articles/:articleId|DELETE|Delete article by article id
|/api/articles/getArticle/:username|GET|Delete article by username

List of client routes:

| Route | HTTP | Description |
| ------ | ------ | ------ |
| <span style="color:red"> /api/signup </span>| POST | Sign up with new user info
| /api/signin | POST | Sign in while get access token based on credentials
| /api/users | GET | Get all the users info (admin only)
| /api/users/:id | GET | Get a single user info (admin and authenticated user)
| /api/users | POST | Create a user (admin only)
| /api/users/:id | DELETE | Delete a user (admin only)
| /api/users/:id | PUT | Update a user with new info (admin and authenticated user)
