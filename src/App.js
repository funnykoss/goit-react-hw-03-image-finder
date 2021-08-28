import { Component } from 'react';
import Searchbar from './components/Searchbar';
import { ToastContainer } from 'react-toastify';

import ImageGalleryInfo from './components/ImageGalleryInfo';
class App extends Component {
  state = {
    searchInput: '',
  };

  handlerForSubmit = searchInput => {
    this.setState({ searchInput });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handlerForSubmit} />
        <ImageGalleryInfo searchInput={this.state.searchInput} />
        <ToastContainer />
      </>
    );
  }
}

export default App;
