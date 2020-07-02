import React from 'react';
import Proptypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

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
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">"loading..."</span>
          </div>
        ) : (
            <div class="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              ))}
            </div>
          )}
      </section>
    )
  }
}

export default App;