const name = ["Maximilian", "Manual"];

function Post() {
// Math.random() generates pseudo-random floating-point number = decimal between 0 (inclusive) and 1 (exclusive).
// If the random number is greater than 0.5 (which happens with a 50% chance),the expression evaluates to true.
// condition ? expressionIfTrue : expressionIfFalse 
  const chosenName = Math.random() > 0.5 ? name[0] : name[1];

  return (
    <div>
      <p>name: {chosenName}</p>
      <p>React.js is awesome!</p>

    </div>
  );
}
export default Post;
