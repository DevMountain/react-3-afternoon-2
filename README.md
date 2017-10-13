<img src="https://devmounta.in/img/logowhiteblue.png" width="250">

# Http-afternoon Project

## Setup
First you will need to fork and clone this repo and install the necessary npm packages.

#### Fork and Clone
In your terminal navigate to the folder that will contain this afternoon project. Then clone the repo with this command:

`git clone ` and the address of your forked copy. e.g.: `git clone https://github.com/[YOUR-USER-NAME]/react-axios.git`

Next cd into the new project folder:
`cd http-afternoon`

Then you will need to install the required react packages by running:

`npm install`

You can make sure the project is ready to work on by running: 

`npm start`

## Install axios

Install axios into the project:
`npm install axios --save`

## Axios

To use axios you will import it into any component or Javascript file in which you will be using it.

`import axios from 'axios';`

#### Methods
For each type of HTTP request you will use the appropriate axios method:

`axios.get()`
`axios.post()`
`axios.put()`
`axios.delete()`

The methods `get` and `delete` will take a string indicating the API endpoint route or URL. e.g.:

`axios.get('/api/blogs')` or `axios.get('https://swapi.co/api/people/1/')`

The methods `post` and `put` will also take a string and can take an optional object as arguments.
This object will usually contain the information that you are putting on the database. It will need to be structured with the appropriate properties according the the API's documentation.

For example:

```javascript
let user = {name: "Lloyd", height: `5'11"`, programmingLanguages: ['javascript', 'python', 'c++']}
axios.post('/api/users', user)
```

#### Promises

Axios methods return promise objects. This allows for other code to run until your request receives a response.

To handle the response you will use the `.then` method for fulfilled requests and the `.catch` method for rejected requests;
Each of these methods take a callback function. `.then` will give you the response object and `.catch` will give you the error (usually the reason for rejection.)

You should note that promises are asynchronous. This means that any code that is dependant upon the response from the axios request or that needs to be run after the response arrives, should be in the callback function in the `.then` or `.catch`.

For example:

```javascript
axios.get('/api/user/56812').then(response=>{
    //Do something with response
    console.log(response.data);
    this.setState({
        user: response.data
    });
}).catch(err=>{
    console.log(err);
})
```

## Api Documentation

In this section we will try to describe each endpoint and the expected results.

#### Endpoints

Method: GET<br>
`/api/user/:id` - Returns one user object if the id matches a user in the database.<br>
`/api/users` - Returns an array with 10 users paginated. Also accepts a query for searching users.<br>
`/api/blog/:id` - Returns one blog object if the id matcher a blog in the database.<br>
`/api/blogs` - Returns an array with 10 blogs paginated. Also accepts a query for searching blogs.<br>
`/api/featured` - Returns an array with the blogs marked as featured.<br>
`/api/blogs/user/:id` - Returns an array with all the blogs authored by the user indicated by the id param.<br>

Method: POST<br>
`/api/users/` - Returns an object with the new user information including the id.<br>
`/api/blogs/` - Returns an object with the new blog post information including the id.<br>

Method: PUT<br>
`/api/user/:id` - Returns an object with the updated user.<br>
`/api/blog/:id` - Returns an object with the updated blog post.<br>

Method: DELETE<br>
`/api/user/:id` - Returns an empty object after deleting the indicated user.<br>
`/api/blog/:id` - Returns an empty object after deleting the indicated blog post. <br>

#### Data Models

The following data templates (sometimes called schemas) are what the POST and PUT endpoint expect. 

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

User: 

```javascript
{
    name: "Andrew Garvin"
}
```

## Home view

Open the Home.js file in the components folder.
Import axios near the top of the file:
`import axios from 'axios';`

Now, you will make a `componentDidMount` method and use axios to make a GET request to the endpoint: `'/api/featured'`

Using the `.then` function on the axios call, set the `featured` property in state to the appropriate data in the results.


<details>
<summary><b>Code Solution</b></summary>
<details>
<summary><code>src/components/Home.js</code></summary>

```javascript
componentDidMount(){
    axios.get('/api/featured').then(results=>{
        this.setState({
            featured: results.data
        })
    })
    axios.get(`/api/blogs`).then(results=>{
        this.setState({
            posts: results.data
        })
    })
}
```

</details>
</details>



## Blog
Next we are going to add axios to the Blog.js component.
Import axios near the top of the file:
`import axios from 'axios';`

This axios request will also be in the `componentDidMount` method.

The endpoint will be at `/api/blog/:id`. The `:id` is a parameter. Meaning that the http request will send whatever is after the `/` as a variable to select the corresponding blog from the api. For example: `/api/blog/5` indicates to the api to get the blog with an id of `5`.

This parameter is being used in the React routing also. You can access the parameter in react thusly: `this.props.match.params.id` in this case.

Append the blog id to the api endpoint.

Assign the results to the `blog` property on state.


<details>
<summary><b>Code Solution</b></summary>
<details>
<summary><code>src/components/Blog.js</code></summary>

```javascript
componentDidMount(){
    axios.get(`/api/blog/${this.props.match.params.id}`).then(results=>{
        this.setState({
            blog: results.data
        })
    })
}
```

</details>
</details>

## Search

Next we are going to add axios to the Search.js component.
Import axios near the top of the file:
`import axios from 'axios';`

This axios request will be in a method you will make called `search`.

The endpoint will be at `/api/blogs`. 

You are going to append a query to the end of the endpoint.

Queries are in the format: `?[keyName]=[value]` ie: `?q=how to get a job`

Assign the results to the `blog` property on state.


<details>
<summary><b>Code Solution</b></summary>
<details>
<summary><code>src/components/Search.js</code></summary>

```javascript
search(){
    axios.get(`/api/blogs/?q=${this.state.searchTerm}`).then(results=>{
        this.setState({
            searchResults: results.data
        })
    })
}
```

</details>
</details>

## Add

Next we are going to add axios to the Add.js component.
Import axios near the top of the file:
`import axios from 'axios';`

This axios request will be in a method you will make called `post`.

The endpoint will be at `/api/blog`.


<details>
<summary><b>Code Solution</b></summary>
<details>
<summary><code>src/components/Add.js</code></summary>

```javascript
post(){
    let body = {title: this.state.title, subTitle: this.state.subTitle, image: this.state.image, text: this.state.text}
    axios.post('/api/blog', body).then(results=>{
        this.setState({
            searchResults: results.data
        })
    })
}
```

</details>
</details>


## Edit

Next we are going to add axios to the Edit.js component.
Import axios near the top of the file:
`import axios from 'axios';`

This axios requests will be in a several methods you will make: `componentDidMount`, `updatePost`, and `deletePost`.

The `componentDidMount` method will be using a `get` request.

The `updatePost` method will be using a `put` request.

The `deletePost` method will be using a `delete` request.

The endpoint for all requests will be at `/api/blog/:id`.
You should notice that we are using a parameter again.
This will be available via: `this.props.match.params.id`

Your `get` request will set the blog property on state. 

The `put` request will route to the newly updated blog. Put in the callback of your `.then` method the following line: 

```javascript
this.props.history.push(`/blog/${this.props.match.params.id}`)
```

The `delete` request will route to the search page. Put in the callback of your `.then` method the following line: 

```javascript
this.props.history.push('/search')
```

<details>
<summary><b>Code Solution</b></summary>
<details>
<summary><code>src/components/Edit.js</code></summary>

```javascript
componentDidMount(){
    axios.get(`/api/blog/${this.props.match.params.id}`).then(results=>{
        this.setState({
            blog: results.data
        })
    })
}

updatePost(){
    let body = {title: this.state.title, subTitle: this.state.subTitle, image: this.state.image, text: this.state.text}
    axios.put(`/api/blog/${this.props.match.params.id}`, body).then(results=>{
        this.props.history.push(`/blog/${this.props.match.params.id}`)
    })
}

deletePost(){
    let body = {title: this.state.title, subTitle: this.state.subTitle, image: this.state.image, text: this.state.text}
    axios.delete(`/api/blog/${this.props.match.params.id}`).then(results=>{
        this.props.history.push('/search')
    })
}
```

</details>
</details>


## User



## Contributions

### Contributions

#### 
 
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

### Copyright

#### 

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
