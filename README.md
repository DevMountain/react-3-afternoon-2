<img src="https://devmounta.in/img/logowhiteblue.png" width="250">

# Http-afternoon Project

# Setup

First you will need to fork and clone this repo and install the necessary npm
packages.

#### Fork and Clone

In your terminal navigate to the folder that will contain this afternoon
project. Then clone the repo with this command:

`git clone` and the address of your forked copy. e.g.: `git clone
https://github.com/[YOUR-USER-NAME]/react-axios.git`

Next cd into the new project folder: `cd http-afternoon`

Then you will need to install the required react packages by running: `npm
install`

You can make sure the project is ready to work on by running:

`npm start`

## Install axios

Install axios into the project: `npm install axios --save`

## Axios

To use axios you will import it into any component or Javascript file in which
you will be using it.

`import axios from 'axios';`

## NPM Start

After all the packages have installed, start up the project by running `npm
start`.

If you have installed axios and the other default npm packages, you should see a
non-functional blog website.

# Important Information

#### Methods

For each type of HTTP request you will use the appropriate axios method:

`axios.get()` `axios.post()` `axios.put()` `axios.delete()`

The methods `get` and `delete` will take a string indicating the API endpoint
route or URL. e.g.:

`axios.get('/api/blogs')` or `axios.get('https://swapi.co/api/people/1/')`

The methods `post` and `put` will also take a string and can take an optional
object as arguments. This object will usually contain the information that you
are putting on the database. It will need to be structured with the appropriate
properties according the the API's documentation.

For example:

```javascript
let user = {
  name: "Lloyd",
  height: `5'11"`,
  programmingLanguages: ["javascript", "python", "c++"]
};
axios.post("/api/users", user);
```

#### Promises

Axios methods return promise objects. This allows for other code to run until
your request receives a response.

To handle the response you will use the `.then` method for fulfilled requests
and the `.catch` method for rejected requests; Each of these methods take a
callback function. `.then` will give you the response object and `.catch` will
give you the error (usually the reason for rejection.)

You should note that promises are asynchronous. This means that any code that is
dependant upon the response from the axios request or that needs to be run after
the response arrives, should be in the callback function in the `.then` or
`.catch`.

For example:

```javascript
axios
  .get("/api/user/56812")
  .then(response => {
    //Do something with response
    console.log(response.data);
    this.setState({
      user: response.data
    });
  })
  .catch(err => {
    console.log(err);
  });
```

## Api Documentation

In this section we will try to describe each endpoint and the expected results.

#### Endpoints

Method: GET<br> `/api/user/:id` - Returns one user object if the id matches a
user in the database.<br> `/api/users` - Returns an array with 10 users
paginated. Also accepts a query for searching users.<br> `/api/blog/:id` -
Returns one blog object if the id matcher a blog in the database.<br>
`/api/blogs` - Returns an array with 10 blogs paginated. Also accepts a query
for searching blogs.<br> `/api/featured` - Returns an array with the blogs
marked as featured.<br> `/api/blogs/user/:id` - Returns an array with all the
blogs authored by the user indicated by the id param.<br>

Method: POST<br> `/api/users/` - Returns an object with the new user information
including the id.<br> `/api/blogs/` - Returns an object with the new blog post
information including the id.<br>

Method: PUT<br> `/api/user/:id` - Returns an object with the updated user.<br>
`/api/blog/:id` - Returns an object with the updated blog post.<br>

Method: DELETE<br> `/api/user/:id` - Returns an empty object after deleting the
indicated user.<br> `/api/blog/:id` - Returns an empty object after deleting the
indicated blog post. <br>

#### Data Models

The following data templates (sometimes called schemas) are what the POST and
PUT endpoint expect.

Blog Post:

```javascript
{
    name: "John Doe",
    image: "https://usplash.it/600/300/?random",
    title: "Blogs Need Titles",
    subTitle: "They don't necessarily have to have subtitles.",
    text: "Content would go here.",
    featured: true
}
```

Post User:

```javascript
{
    "name": "Andrew Garvin",
    "img": "https://unsplash.it/300/?random",
    "desc": "Descriptions are over rated, unlike Rick Rolls."
}
```

# Step 1:

## Home view

Open the Home.js file in the components folder. Import axios near the top of the
file: `import axios from 'axios';`

Now, you will make a `componentDidMount` method and use axios to make a GET
request to the endpoint: `'/api/featured'`

Using the `.then` function on the axios call, set the `featured` property in
state to the appropriate data in the results.

Set the data to the `posts` property on state and set `index` to
`(~~(Math.random() * results.data.length) + 0)` (this will randomly select a
post to feature on the homepage).

Now, in the `render` method before the `return`, map over the `posts` array and
assign each blog post object into a `<BlogThumb />` component. The `BlogThumb`
component will display the prop called `blog`.

E.g.: `const posts = this.state.posts.map((c,i)=><BlogThumb key={i} blog={c}/>)`

Lastly, add a `.catch(console.log)` to the end of `.then` for error reporting.

<details>
<summary><b>Code Solution</b></summary>
<details>
<summary><code>src/components/Home.js</code></summary>

```javascript
...
componentDidMount(){
    axios.get('/api/featured').then(results=>{
        this.setState({
            featured: results.data,
            index: (~~(Math.random() * results.data.length) + 0),
            posts: results.data
        })
    }).catch(console.log)
}
    render(){
        // map over your recommended blogs here
        const posts = this.state.posts.map((c,i)=><BlogThumb key={i} blog={c}/>)

        return(
...
```

</details>
</details>

# Step 2

## Blog

Next we are going to add axios to the Blog.js component. Import axios near the
top of the file: `import axios from 'axios';`

The endpoint will be at `/api/blog/:id`. The `:id` is a parameter. Meaning that
the http request will send whatever is after the `/` as a variable to select the
corresponding blog from the api. For example: `/api/blog/5` indicates to the api
to get the blog with an id of `5`.

This parameter is being used in the React routing also. You can access the
parameter in react thusly: `this.props.match.params.id` in this case.

In a `componentDidMount` method, make an `axios.get` call to `/api/blog/id` with
the id property from `this.props.match.params` filling the `id` spot in the URL.
`console.log` the response in the `.then` and find what data needs to be set to
`state`.

Lastly, add a `.catch(console.log)` to the end of `.then` for error reporting.

<details>
<summary><b>Code Solution</b></summary>
<details>
<summary><code>src/components/Blog.js</code></summary>

```javascript
...
componentDidMount(){
    axios.get(`/api/blog/${this.props.match.params.id}`).then(results=>{
        this.setState({
            blog: results.data
        })
    }).catch(console.log)
}
...
```

</details>
</details>

# Step 3

## Search

Next we are going to go to the Search.js component. We have already imported
axios near the top of the file for you. `import axios from 'axios';`

This axios request will be in a method you will make called `search`. `search`
will take in a single parameter `event`. Begin by invoking
`event.preventDefault()`. HTML forms like the one we're using naturally refresh
the page on submit. That's ugly, so we're using preventDefault to make it not
happen.

`search` is going to allow us to search by both blogs and users, which makes for
some pretty interesting code. If you look at the state object in our
constructor, you'll see a property called `searchType`. We've set up your UI so
that that updates based on a radio button. Since we want to be able to search
two different groups, we'll technically need two different URLs -- `/api/blogs`
and `/api/users`. Luckily it's pretty easy to inject variables into strings,
meaning we can have one _dynamic_ URL.

In our `axios.get` call, all we have to do is reference `this.state.searchType`
in our URL string. The most current way to this is with a template string (use
backticks instead of quotes) and variable injection (like this:
`${variableName}`). So, if you make a get request to
`/api/${this.state.searchType}`, you'll have a dynamic URL since searchType
changes.

This is only halfway though. We still need to account for a changing search
input. Lets add a query to the end of the URL. Queries are built like this:
`?[keyName]=[value]` ie: `?q=how to get a job`. For our purposes, we need our
query to be dynamic too. Try and use the same idea taught above to create a
dynamic query at the end of your URL.

Now we need to separate our results to either `this.state.blogResults` or
`this.state.userResults`. We can evaluate the `searchType` property on state to
verify where our response needs to go. Create an `if` statement that assigns
`response.data` to `this.state.blogResults` if `this.state.searchType` is
`'blogs'`. Otherwise, set the data to `this.state.usersResults`.

Map over `this.state.blogResults`, passing each element into `<BlogTile />`. Be
sure to add a key attribute passing in the index of each element and a blog
attribute passing in the element itself. Set the result to the variable called
`blogResults`.

Map over `this.state.userResults`, passing each element into `<UserTile />`. Be
sure to add a key attribute passing in the index of each element and a user
attribute passing in the element itself. Set the result to the variable called
`userResults`.

Lastly, add a `.catch(console.log)` to the end of `.then` for error reporting.

#### Bonus

You'll notice that if we hit the back arrow our search history isn't preserved.
To remedy that, paste this line into the top of your `if` and `else` statements:

```javascript
this.props.history.push(
  makeQuery("/search?", { q: searchTerm, type: searchType })
);
```

<details>
<summary><b>Code Solution</b></summary>
<details>
<summary><code>src/components/Search.js</code></summary>

```javascript
...
search(e){
        e.preventDefault()
        const { searchTerm, searchType }=this.state

        axios.get(`/api/${searchType}?q=${searchTerm}`).then(response=>{
            if(searchType==='blogs'){
                this.props.history.push(makeQuery('/search?',{q:searchTerm,type:searchType}))
                this.setState({
                    blogResults: response.data,
                    userResults: []
                })
            }else{
                this.props.history.push(makeQuery('/search?',{q:searchTerm,type:searchType}))
                this.setState({
                    blogResults: [],
                    userResults: response.data
                })
            }
        }).catch(console.log)
    }


    render(){
        // map over the searchResults here
        const blogResults = this.state.blogResults.map((c,i)=> <BlogTile key={i} blog={c}/> )
        const userResults = this.state.userResults.map((c,i)=> <UserTile key={i} user={c}/>)

        return(
...
```

</details>
</details>

# Step 4

## Add

Next we are going to add axios to the Add.js component. Import axios near the
top of the file: `import axios from 'axios';`

Initialize a method called `post`. It will not take in any arguments. For this
section, since we'll be sending data to the server, we will be making a POST
request. `axios.post` takes in two arguments: the back end URL and a `body`
object.

First we'll set up our `body` object. Create a variable called `body` that is
formatted like this:

```javascript
{
    title: this.state.title,
    subTitle: this.state.subTitle,
    image: this.state.image,
    text: this.state.text
}
```

Now we'll make our post request. The endpoint will be `/api/blogs`, and the
second argument will be our `body` variable.

Lastly, add a `.catch(console.log)` to the end of `.then` for error reporting.

#### Bonus

The UI is already set up so that the buttons work, but it still doesn't feel
right to be left on the same page after something's changed. Let's make use of
`this.props.history.push` again. Inside your .then() method, add this line:

```javascript
this.props.history.push(`/blog/${results.data.id}`);
```

<details>
<summary><b>Code Solution</b></summary>
<details>
<summary><code>src/components/Add.js</code></summary>

```javascript
post(){
    let body = {title: this.state.title, subTitle: this.state.subTitle, image: this.state.image, text: this.state.text}
    axios.post('/api/blog', body).then(results=>{
        this.props.history.push(`/blog/${results.data.id}`)
    }).catch(console.log)
}
```

</details>
</details>

# Step 5

## Edit

Next we are going to add axios to the Edit.js component. Import axios near the
top of the file: `import axios from 'axios';`

This time there are going to be three `axios` requests made from
`componentDidMount`, `updatePost`, and `deletePost` methods.

The `componentDidMount` method will be using a GET request.

The `updatePost` method will be using a PUT request.

The `deletePost` method will be using a DELETE request.

The endpoint for all requests will be at `/api/blog/:id`. You should notice that
we are using a URL parameter again. This will be available via:
`this.props.match.params.id`. The URL will need to be dynamic, so use backticks
and variable injection again.

Let's start with `componentDidMount`. This is where we'll make a GET request for
the selected blog post. In the `.then` of the get request, we'll parse out our
`response.data` into multiple properties on `this.state`. Try and decide what
properties those might be by using `console.log` on `response.data`. As always,
add `.catch(console.log)` after `.then`

Now we'll create the `updatePost` method for the PUT request. This is where our
edit function comes from. A PUT request tells the server that you're changing
some information that already exists, rather than adding new information.
`axios.put` is set up the same way as `axios.post` -- two arguments: endpoint
and body object. Follow the same pattern from `Add.js`. Don't forget
`.catch(console.log)`

We'll make our DELETE request from a `deletePost` method. `axios.delete` only
takes one argument, a URL.

#### Bonus

We have routing problems again.

Let's route to the blog that we update from `updatePost` after we've updated it.
Add the following line to the `.then`:

```javascript
this.props.history.push(`/blog/${this.props.match.params.id}`);
```

The `delete` request will route to the search page. Put in the callback of your
`.then` method the following line:

```javascript
this.props.history.push("/search");
```

<details>
<summary><b>Code Solution</b></summary>
<details>
<summary><code>src/components/Edit.js</code></summary>

```javascript
...
    componentDidMount(){
        axios.get(`/api/blog/${this.props.match.params.id}`).then(results=>{
            let blog = results.data
            this.setState({
                title: blog.title,
                subTitle: blog.subTitle,
                image: blog.image,
                text: blog.text,
                original: blog
            })
        }).catch(console.log)
    }


    updatePost(){
        let body = {title: this.state.title, subTitle: this.state.subTitle, image: this.state.image, text: this.state.text}
        axios.put(`/api/blogs/${this.props.match.params.id}`, body).then(results=>{
            this.props.history.push(`/blog/${this.props.match.params.id}`)
        }).catch(console.log)
    }


    deletePost(){
        axios.delete(`/api/blogs/${this.props.match.params.id}`).then(results=>{
            this.props.history.push('/search')
        }).catch(console.log)
    }
...
```

</details>
</details>

# Step 6

## NewUsers

Next we are going to add axios to the NextUser.js component. Import axios near
the top of the file: `import axios from 'axios'`;

We're now going to mainly repeat the concepts we just used but for users. We'll
need a way to add a user (using a POST request), update a user (using a PUT
request), and delete a user (using a DELETE request). All of these methods will
be built on `NewUser.js` and will be aptly named `addUser`, `updateUser`, and
`deleteUser`.

In the `NewUser.js` component create the addUser method which will make a post
request to `/api/users` and pass in this.state as the second parameter to
request. Set the response in your .then to a variable called user.

Now create the updateUser method which will make a put request to the
`/api/users/id`. The id will come from `this.props.match.params.id`. The second
parameter on this put request will be this.state. Set the response in your .then
to a verable called user.

Next create the deleteUser method which will make a delete request to the
`/api/user/id`. The id will come from `this.props.match.params.id`. For now you
don't need to put anything into your .then.

#### Bonus

Let's fix our routing, starting with `NewUser.js`

In `addUser` and update, let's redirect to the new user.

```javascript
this.props.history.push(`/user/${user.id}`);
```

in `deleteUser` let's redirect to the search page.

```javascript
this.props.history.push(`/search/`);
```

## User

Next we are going to add axios to the User.js component. Import axios near the
top of the file: `import axios from 'axios'`;

We will need to make a GET request in the `componentDidMount` on `User.js` in
order to populate the UI with the correct information.

You will be making two get requests within `componentDidMount`. The first will
be to `/api/user/id`. You will get the id from `this.props.match.params.id`. Set
the user property on state with the data from the response of the api call.

The second will be to `/api/blogs` but will have a query where `userID` is equal
to `this.props.match.params.id`. Set the posts property on state with the data
from the response of the api call.

<details>
<summary><b>Code Summary</b></summary>
<details>
<summary><b>src/components/NewUser.js</b></summary>

```javascript
...
    // insert addUser
    addUser(){
        axios.post('/api/users', this.state).then(response=>{
            console.log(response)
            let user = response.data
            this.props.history.push(`/user/${user.id}`)
        })
    }

    // insert updateUser
    updateUser(){
        let id = this.props.match.params.id
        axios.put(`/api/user/${id}`, this.state).then(response=>{
            console.log(response)
            let user = response.data
            this.props.history.push(`/user/${user.id}`)
        })
    }

    // insert deleteUser
    deleteUser(){
        let id = this.props.match.params.id
        axios.delete(`api/user/${id}`).then(response=>{
            this.props.history.push(`/search`)
        })
    }
...
```

</details>
<details>
<summary><b>src/components/User.js</b></summary>

```javascript
...
    componentDidMount(){
        let userID = this.props.match.params.id;
        axios.get(`/api/user/${userID}`).then(response=>{
            let user = response.data
            this.setState({
                user: user
            })
        })
        axios.get(`/api/blogs?userID=${userID}`).then(response=>{
            console.log(response);
            this.setState({
                posts: response.data
            })
        })
    }
...
```

</details>
</details>

# Black Diamond

When multiple HTTP requests are run concurrently, you can ensure that the
callback function for both promises are run simultaneously by using `axios.all`.

Go look at the axios documentation to see how to implement this.
<a href="https://github.com/axios/axios">Axios Documentation: Github</a>

This would be best used in this project in the `User.js` file.

Use `axios.all` to get the user data and the blog posts data and set them both
on state simultaneously.

## Contributions

### Contributions

####

If you see a problem or a typo, please fork, make the necessary changes, and
create a pull request so we can review your changes and merge them into the
master repo and branch.

## Copyright

### Copyright

####

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material
without express and written permission from DevMountain, LLC is strictly
prohibited. Excerpts and links may be used, provided that full and clear credit
is given to DevMountain with appropriate and specific direction to the original
content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
