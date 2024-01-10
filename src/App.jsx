import * as React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <React.StrictMode>
      <h1>Hello World</h1>
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
