import { useState, useEffect } from "react";
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

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
      <a href={story.url || "#"} target="_blank" rel="noreferrer">
        {story.title || "Untitled story"}
      </a>
    </h3>

    <p>
      <span>Author: {story.author}</span>
    </p>

    <p>
      <span>Points: {story.points}</span>{" "}
      <span>Comments: {story.num_comments}</span>
    </p>

    <button type="button" onClick={() => onRemoveStory(story)}>
      Delete
    </button>
  </article>
);
const App = () => {
  console.log("App renders");

  const [searchTerm, setSearchTerm] = useState(
  localStorage.getItem("search") || "React"
);

const [stories, setStories] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);

const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);


useEffect(() => {
  localStorage.setItem("search", searchTerm);
}, [searchTerm]);
useEffect(() => {
  if (!url) return;

  setIsLoading(true);
  setIsError(false);

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      setStories(result.hits);
      setIsLoading(false);
    })
    .catch(() => {
      setIsError(true);
      setIsLoading(false);
    });
}, [url]);
const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};
const handleSearchSubmit = () => {
  if (!searchTerm) return;

  setUrl(`${API_ENDPOINT}${searchTerm}`);
};
const handleRemoveStory = (item) => {
  const newStories = stories.filter(
    (story) => story.objectID !== item.objectID
  );

  setStories(newStories);
};

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

<button
  type="button"
  disabled={!searchTerm}
  onClick={handleSearchSubmit}
>
  Submit
</button>

<hr />

{isError && <p>Something went wrong ...</p>}

{isLoading ? (
  <p>Loading ...</p>
) : (
  <List stories={stories} onRemoveStory={handleRemoveStory} />
)}
{/*
  Reflection:
  We use useEffect for fetching because fetching data is a side effect
  that happens outside React's normal rendering.

  Loading state tells the user that data is currently being fetched.
  Error state tells the user that something failed during fetching.

  We control when fetching happens to avoid sending a request on every keystroke.
  The app now fetches only when the user clicks Submit.
*/}
    </main>
  );
};
export default App; 

