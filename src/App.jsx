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
const List = ({ stories, onRemoveStory }) => (
  <section>
    {stories.map((story) => (
      <Item
        key={story.objectID}
        story={story}
        onRemoveStory={onRemoveStory}
      />
    ))}
  </section>
);
const Item = ({ story, onRemoveStory }) => (
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
    <button type="button" onClick={() => onRemoveStory(story)}>
  Delete
</button>
  </article>
);
const App = () => {
  console.log("App renders");

  const initialStories  = [
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
const [stories, setStories] = useState(initialStories);
useEffect(() => {
  localStorage.setItem("search", searchTerm);
}, [searchTerm]);
const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};
const handleRemoveStory = (item) => {
  const newStories = stories.filter(
    (story) => story.objectID !== item.objectID
  );

  setStories(newStories);
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

<List stories={searchedStories} onRemoveStory={handleRemoveStory} />
    
{/*
  Reflection:
  A reusable component avoids hard-coded values and accepts flexible props.

  Component composition means passing content between opening and closing
  component tags and accessing it through children.

  We pass handlers down the component tree because the parent owns the state,
  but child components often trigger the action.
*/}
    </main>
  );
};
export default App; 

