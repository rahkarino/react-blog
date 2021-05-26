import React from "react";
import axios from "axios";
import "./Posts.scss";
import Post from "../../../components/Post/Post";
// import { Link } from "react-router-dom";

class Posts extends React.Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios
      .get("/posts")
      .then((res) => {
        const posts = res.data.slice(0, 4).map((item) => {
          return { ...item, author: "Ehsan" };
        });
        this.setState({ posts });
      })
      .catch(() => this.setState({ error: true }));
  }
  postDetailHandler = (id) => {
    this.props.history.push(`/${id}`)
  };
  render() {
    let posts = <p>Fetching data failed!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((item) => {
        return (
          // <Link to={`/${item.id}`} key={item.id}>
          <Post
            key={item.id}
            title={item.title}
            author={item.author}
            click={() => this.postDetailHandler(item.id)}
          />
          // </Link>
        );
      });
    }

    return <div className="posts">{posts}</div>;
  }
}

export default Posts;
