import React from "react";
import { Layout } from "./Layout";
import { Home } from "./ui/Home";

function App(): React.JSX.Element {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
