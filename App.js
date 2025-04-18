import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "This is the H1 tag ")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);
