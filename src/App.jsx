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

function App() {
  console.log(stories[0]);

  return (
    <main>
      <h1>Hacker News Style Stories</h1>

      {/*
        Data structure:
        Each story object has:
        - objectID: unique identifier
        - title: article title
        - url: article link
        - author: person who posted it
        - points: popularity score
        - num_comments: number of comments

        The React key should be objectID because it is unique and stable.
        This structure is realistic for an API because real APIs usually return
        arrays of objects with IDs and multiple properties.
      */}

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

      
    </main>
  );
}

export default App;