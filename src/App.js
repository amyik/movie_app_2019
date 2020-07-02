import React from 'react';
import Proptypes from "prop-types";

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 5000);
  }

  render() {
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? "loading..." : "We are ready"}
      </div>
    )
  }
}

export default App;

// mounting
// updateing
// unmounting

