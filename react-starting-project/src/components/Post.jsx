import styles from  "./Post.module.css";
function Post(props) {
  return (
    // inline styles:
    // dash "-" is not allowed in plain property / variable names in JavaScript: "textAlign" instead of "text-align"
    // it is not special double curly braces syntax, instead it's still the same single {} syntax for dunamic values with an object passed as a value to the style prop.
    // <div style={{ color: "red", textAlign: "left" }}>

    // scope CSS styles to not clash with others globally in index.css
    <div className={styles.post}>
      <p className={styles.author}>{props.author}</p>
      <p className={styles.text}>{props.body}</p>
    </div>
  );
}
export default Post;
