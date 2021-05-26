import React from "react";
import "./NewPost.scss";
import axios from "axios";
import { Redirect } from 'react-router-dom'

class NewPost extends React.Component {
  state = {
    title: "",
    body: "",
    author: "Ehsan",
    submitted: false
  };
  addPostHandler = () => {
    const newPost = {
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
    };
    axios
      .post("/posts", newPost)
      .then(() => this.setState({ submitted: true }))
      .catch((err) => console.log(err));
  };
  render() {
    let redirect = null
    if(this.state.submitted) {
      redirect = <Redirect to="/" />
    }
    return (
      <div className="NewPost">
        {redirect}
        <hr/>
        <h2>Add Post</h2>
        <div>
          <label>Title: </label><br/>
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.setState({ title: event.target.value })}
          />
        </div>
        <div>
          <label>Content: </label><br/>
          <textarea
            rows="4"
            value={this.state.body}
            onChange={(event) => this.setState({ body: event.target.value })}
          />
        </div>
        <div>
          <label>Author: </label><br/>
          <select
            value={this.state.author}
            onChange={(event) => this.setState({ title: event.target.value })}
          >
            <option value="Ehsan">Ehsan</option>
          </select>
        </div>
        <button onClick={this.addPostHandler}>Send</button>
      </div>
    );
  }
}

export default NewPost;
