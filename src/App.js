import React from 'react';
import Proptypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    console.table(movies);

    this.setState({ isLoading: false, movies });

    console.log(this.state);
  }

  componentDidMount() {
    const movies = this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ? "loading..." : movies.map(movie => {
          return <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image} />
        })}
      </div>
    )
  }
}

export default App;