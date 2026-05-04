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
const Header = () => <h1>Hacker News Style Stories</h1>;
const Search = () => {
  const handleChange = (event) => {
    console.log("User typed in the search input");
    console.log(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};
const List = () => (
  <section>
    {stories.map((story) => (
      <article key={story.objectID}>
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
    ))}
  </section>
);

const App = () => (
  <main>
    <Header />
    <Search />

    <hr />

    <List />

    {/*
      Warm-up:
      A component that becomes 300 lines long becomes harder to read and maintain.
      A long component is harder to debug because many responsibilities are mixed together.
      Engineers split code into smaller units to make it cleaner, reusable, and easier to test.

      Reflection:
      We use concise body arrow functions when the function only returns one value.
      We use block body arrow functions when we need extra logic before returning JSX.
      An event object contains information about the user action.
      The typed input value is inside event.target.value.
    */}
  </main>
);
export default App;

