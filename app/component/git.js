import React from "react";
import GitHubPushes from "../api/github";

function App() {
  const API_KEY = process.env.GITHUB_API_KEY;
  return (
    <div className="App">
      <GitHubPushes username="zohaibAlam840" token={API_KEY} />
    </div>
  );
}

export default App;
