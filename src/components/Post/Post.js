import React from "react";
import "./Post.scss";

const Post = props => {
    return <>
    <div className="post-list">* <b>title</b>: {props.title} <b>author</b>: {props.author} <button onClick={props.click}>read more</button></div>
    
    </>
}

export default Post