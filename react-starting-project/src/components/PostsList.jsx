import styles from  "./PostsList.module.css";
import Post from "../components/Post";

function PostsList() {
  return (
    <ul className={styles.posts}>
      <Post author="Maximilian" body="React.js is awesome!" />
      <Post author="Manual" body="Check out the full course!" />
    </ul>
  );
}
export default PostsList;