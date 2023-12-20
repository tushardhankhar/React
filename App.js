import React from "react";
import  ReactDOM  from "react-dom/client";

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
    React.createElement("h1", {}, "Hello parents ")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
