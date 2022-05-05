import React from "react";
import About from "./About.js"
import Header from "./Header.js"
import ArticleList from "./ArticleList"
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name = {blogData.name}/>
      <About image = {blogData.image} about = {blogData.about}/>
      <ArticleList posts = {blogData.posts} />
    </div>
  );
}

export default App;
