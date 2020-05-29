import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
const Book = gql`
  {
    books {
      title
      author
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(Book);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  console.log("data: ", data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data.books.map(({ title, author }, k) => (
          <div key={k}>
            <p>
              {title} - {author}
            </p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
