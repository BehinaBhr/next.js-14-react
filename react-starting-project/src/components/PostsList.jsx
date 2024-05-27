import styles from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import { useState } from "react";

// functions in React that start with use = React Hooks.
// const [currentValue, setCurrentValue] = useState("")
//lifting the state up: If we have state that's manipulated in component A but needed in component B, you should lift the state up to a component that has access to both components that need the state.

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  return (
    <>
      <NewPost onBodyChange={changBodyHandler} onAuthorChange={changeAuthorHandler} />
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manual" body="Check out the full course!" />
      </ul>
    </>
  );
}
export default PostsList;
