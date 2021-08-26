import { Component } from 'react';
import Searchbar from './components/Searchbar';
// import imagesAPI from './services/imageApi';

class App extends Component {
  state = {
    images: [],
    page: 1,
    searchInput: '',
    error: null,
    isLoading: false,
  };

  handlerForSubmit = searchInput => {
    this.setState({ searchInput });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handlerForSubmit} />
      </>
    );
  }
}

export default App;
