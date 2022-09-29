## What is the project:
"Conspiracy Theroist"

The purpose of this application is to gameify world news stories, your goal is to create the most interesting/viral conspiracies that others in the community can vote up or down. After a user is login, they have the ability to create their own conspircies, complete with title and description. From there, users have the ability to view current news stories from the app's homepage, they have a choice to add this new story to any of their previously created conspiracies. Finally, once even supporting evidence has been attached to a conspiracy, users have the ability to publish their creations to the rest of the community. A "Top Conspiracy" community page exists where the community can vote for or against published conspiracies. 

Do your own research! 
----------------------------------------------------------
## `1` Fork & Clone Project & Install Dependencies
`1` The first thing that we are going to do is `fork` and `clone`

`2` Now we are going to install the current dependencies that are listed inside of `package.json`
```text
npm install
```

Here area  couple of the packages that we'll be using for this project:

-  [bcryptjs](https://www.npmjs.com/package/bcryptjs): A library to help you hash passwords. ( [wikipedia](https://en.wikipedia.org/wiki/Bcrypt) ) 
    - Blowfish has a 64-bit block size and a variable key length from 32 bits up to 448 bits.
- [connect-flash](https://github.com/jaredhanson/connect-flash): The flash is an area of the session used for storing messages that will be used to to display to the user. Flash is typically used with redirects.
- [passport](https://www.passportjs.org/docs/): Passport is authentication middleware for Node.js. It is designed to do one thing authenticate requests. There are over 500+ strategies used to authenticate a user; however, we will be using one - *passport-local* Passport is authentication middleware for Node. It is designed to serve a singular purpose: authenticate requests
- [passport-local](http://www.passportjs.org/packages/passport-local/): The local authentication strategy authenticates users using a username and password. The strategy requires a verify callback, which accepts these credentials and calls done providing a user. [passport-local](http://www.passportjs.org/packages/passport-local/)
- [express-session](https://github.com/expressjs/session): Create a session middleware with given *options*.
- [method-override](https://github.com/expressjs/method-override): Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.

You'll want to create a `.env` file and create a varible for your API key, which can be gathered from
this website: https://gnews.io/docs/v4?javascript#introduction (free account registration). That varible should be
as follows: `API_TOKEN`. 


----------------------------------------------------------
### ERD

![Conspiracy Theorist ERD drawio (1)](https://user-images.githubusercontent.com/39060344/190321429-da3b82ef-fe07-4a99-a225-2c50a1c31594.png)

----------------------------------------------------------
### User Stories
1. As a user, I want to search recent news stories happing in the world, by topic, so that I save the stories to create my own theories
2. As a user, I want to be able create write descriptions for my different theories and deside which ones to post with the community
3. As the collective users, we want the ability to rate other's theories on a common board to find out which ones is most feasible
4. As a user, I want to see my news favorites on of my dashboard so that I can track new stories I'm intersted in
----------------------------------------------------------
### Wireframes 
![Conspiracy Theroiest Wireframe] ./images/

----------------------------------------------------------
### Application Routes

| Method | Path | Location | Purpose |
| ------ | ---------------- | -------------- | ------------------- |
| GET | / | server.js | Home page |
| GET | /auth/login | auth.js | Login form |
| GET | /auth/signup | auth.js | Signup form |
| POST | /auth/login | auth.js | Login user |
| POST | /auth/signup | auth.js | Creates user |
| GET | /auth/logout | auth.js | Removes session info |
| GET | /profile | server.js | Regular User Profile |
| GET | /conspiracy/ | conspiracy.js | Top conspiracies | 
| GET | /conspiracy/new | conspiracy.js | New conspiracy form |
| POST | /conspiracy | conspiracy.js | Create conspiracy |
| GET | /conspiracy/:id | conspiracy.js | Edit conspiracy |
| GET | /conspiracy/list/:id | conspiracy.js | User's Conspiracies |
| PUT | /conspiracy/vote/:id | conspiracy.js | Top concpiracy vote up or down | 
| PUT | /conspiracy/edit/:id | conspiracy.js | Edit user conspiracy | 
| DELETE | /conspiracy/news/:id | conspiracy.js | Delete news resources pinned to conspiracies |
| DELETE | /conspiracy/:id | conspiracy.js | Delete conspiracies |
| POST | /news | news.js | Create news resource |

----------------------------------------------------------
