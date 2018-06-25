import * as React from "react";
import NavBar from "./NavBar";

import "../assets/scss/App.scss";

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <NavBar />
        <div>Hello World</div>
      </div>
    );
  }
}

export default App;
