import { useState } from "react";

const Header = () => <h1>Hacker News Style Stories</h1>;
const Search = ({ onSearch }) => {
  console.log("Search renders");

  const handleChange = (event) => {
    onSearch(event);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};
const List = ({ stories }) => {
  console.log("List renders");

  return (
    <section>
      {stories.map((story) => (
        <Item key={story.objectID} story={story} />
      ))}
    </section>
  );
};
const Item = ({ story }) => (
  <article>
    <h3>
      <a href={story.url} target="_blank" rel="noreferrer">
        {story.title}
      </a>
    </h3>

    <p>
      <span>Author: {story.author}</span>
    </p>

    <p>
      <span>Points: {story.points}</span>{" "}
      <span>Comments: {story.num_comments}</span>
    </p>
  </article>
);

const App = () => {
  console.log("App renders");

  const stories = [
  {
    objectID: "1",
    title: "story 1",
    url: "https://example.com/react-rendering-lists",
    author: "Rania elaini",
    points: 120,
    num_comments: 34,
  },
  {
    objectID: "2",
    title: "story 2",
    url: "https://developer.mozilla.org/",
    author: "Henry Nelson",
    points: 87,
    num_comments: 19,
  },
  {
    objectID: "3",
    title: "story 3",
    url: "https://news.ycombinator.com/",
    author: "Maya Chen",
    points: 203,
    num_comments: 58,
  },
];
const [searchTerm, setSearchTerm] = useState("");
const handleSearch = (event) => {
  console.log("Search value:", event.target.value);
  setSearchTerm(event.target.value);
};
const searchedStories = stories.filter((story) =>
  story.title.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
   <main> 
  <Header />
<Search onSearch={handleSearch} />

<hr />

<List stories={searchedStories} />
    
{/*
  Reflection:
  Props pass data from a parent component to a child component.
  State stores data that changes over time inside a component.

  We lift state up when multiple components need to use or affect the same data.
  In this app, App owns searchTerm so it can pass the handler to Search
  and pass filtered stories to List.

  Filtering logic should live in App because App owns both the stories data
  and the searchTerm state.
*/}
    </main>
  );
};
export default App; 

