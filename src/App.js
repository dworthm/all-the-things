import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Title</h1>
      <span>hello world</span>
    </div>
  );
};

render(<App />, document.getElementById("root"));
