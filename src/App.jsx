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
function Header() {
  return <h1>Hacker News Style Stories</h1>;
}
function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}
function List() {
  return (
    <section>
      {stories.map(function (story) {
        return (
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
        );
      })}
    </section>
  );
}

function App() {
  return (
    <main>
      <Header />
      <Search />

      <hr />

      <List />

      {/*
        Reflection:
        App now organizes the page and renders the main components.

        List is responsible for rendering the stories using map().

        Search is responsible for displaying the search label and input.

        This structure is cleaner because each component has one clear job,
        making the code easier to read, debug, and maintain.
      */}
    </main>
  );
}

export default App;

