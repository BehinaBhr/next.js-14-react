import classes from "./NewPost.module.css";
import { useState } from "react";

// label normally has for attribute; but not allowed in JSX code, instead htmlFor.
// functions in React that start with use = React Hooks.
// const [currentValue, setCurrentValue] = useState("")

function NewPost() {
  const [enteredBody, setEnteredBody] = useState("");

  function changBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changBodyHandler} />
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
