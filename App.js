const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from react"
);
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "parent" },
    React.createElement("h1", {}, "hello parents")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
