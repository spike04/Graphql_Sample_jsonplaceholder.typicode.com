# Graphql - jsonplaceholder.typicode.com
---
This repository is a sample implementation of reponse from [JSONPLACEHOLDER.TYPICODE](jsonplaceholder.typicode.com), a free to use rest API site for sample project development.

## Requirements: (Developed in)
1. NodeJS v8.10.0
2. npm 5.7.0
3. [nodemon](https://www.npmjs.com/package/nodemon)

## Modules Used:
1. [GraphQL-yoga](https://github.com/graphcool/graphql-yoga) - For GraphQL implementation
2. [Node-Fetch](https://www.npmjs.com/package/node-fetch) - for performing REST Calls

## How to run the project
- Clone the repo.
- Go into the folder and run
```
npm install
```
or
```
yarn
```
if you have yarn package manager.

Now to run server use the following command:
```
nodemon app.js
```

This will run the project in port 4000. Visit http://localhost:4000, You will see something like this.

![Yoga Playground](img/yoga-playground.png?raw=true "Yoga Playground")

This makes quering GraphQL queries very easy and can do reload relatively faster than using graphiql.

Eg: Peform the following to get the result as follows:
- Getting post with id = 1
```
{
  getPosts(id: 1) {
    id
    title
    body
  }
}
```
![Get Post Graphql](img/getPosts.png?raw=true "Get Post")

- Getting user info as well
```
{
  getPosts(id: 1) {
    id
    title
    body
    userId {
      id
      name
      username
      email
      phone
      website
    }
  }
}
```
![Get Post and User](img/getPostAndUser.png?raw=true "Get Post and User")

- finally get user and all the posts
```
{
  getUser(userId: 1) {
    id
    name
    username
    email
    phone
    website
    posts{
      id
      title
      body
    }
  }
}
```
![Get user info and Post associated with that user](img/getUserAndAllPosts.png?raw=true "Get user info and Post associated with that user")

More GraphQL Coming soon ....