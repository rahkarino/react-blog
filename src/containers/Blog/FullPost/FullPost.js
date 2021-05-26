import axios from "axios";
import React from "react";
import "./FullPost.scss";

class FullPost extends React.Component {
  state = {
    loadedPost: null,
  };

  componentDidMount() {
    if (this.props.match.params.id) {
     if(!this.state.loadedPost || (this.state.loadedPost && 
        this.state.loadedPost.id !== this.props.match.params.id)) {
        axios
        .get(`/posts/${this.props.match.params.id}`)
        .then((res) => {
          this.setState({ loadedPost: res.data });
        })
        .catch((err) => console.log(err));
     }
    }
  }
  deletePostHandler = () => {
    axios.delete(`/posts/${this.props.match.params.id}`)
    .then(res => {
    })
  }
  render() {
    let post = <div>please select a post</div>;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: 'center' }}>Loading...</p>
    }
    if (this.state.loadedPost) {
      post = (
        <div>
          <p>selected post:</p>
          <p>
            <b>title</b>: {this.state.loadedPost.title}
          </p>
          <p>
            <b>body</b>: {this.state.loadedPost.body}
          </p>
          <p>
            <button style={{color: 'red'}} onClick={this.deletePostHandler}>Delete</button>
          </p>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
