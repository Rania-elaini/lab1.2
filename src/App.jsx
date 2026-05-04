import { useState, useEffect } from "react";

const Header = () => <h1>Hacker News Style Stories</h1>;
const InputWithLabel = ({
  id,
  value,
  type = "text",
  onInputChange,
  children,
}) => (
  <div>
    <label htmlFor={id}>{children}</label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onInputChange}
    />
  </div>
);
const List = ({ stories }) => {
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

    <p>Author: {story.author}</p>
    <p>
      Points: {story.points} Comments: {story.num_comments}
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
const [searchTerm, setSearchTerm] = useState(
  localStorage.getItem("search") || ""
);
useEffect(() => {
  localStorage.setItem("search", searchTerm);
}, [searchTerm]);
const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};
const searchedStories = stories.filter((story) =>
  story.title.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
   <main> 
  <Header />
<InputWithLabel
  id="search"
  value={searchTerm}
  onInputChange={handleSearch}
>
  <strong>Search:</strong>
</InputWithLabel>

<hr />

<List stories={searchedStories} />
    
{/*
  Reflection:
  A controlled component is an input whose value is controlled by React state.

  A side effect in React is code that interacts with something outside the component,
  such as localStorage, APIs, or the browser.

  We use useEffect instead of calling side-effect code directly because useEffect
  keeps side effects connected to state changes and separates them from event handlers.
*/}
    </main>
  );
};
export default App; 

