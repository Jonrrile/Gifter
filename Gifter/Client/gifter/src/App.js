import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <input type="search" placeholder="Search Posts" />
        <PostForm />
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;