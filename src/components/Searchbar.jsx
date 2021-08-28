
import { Component } from "react";


export default class Searchbar extends Component{
    state = {
       searchInput:'',
    }
    handlerSubmit = event => {
          
        event.preventDefault();
      
        if (this.state.searchInput.trim() === ''){
            return alert('Попробуйте еще')
        }
        this.props.onSubmit(this.state.searchInput)
        this.setState({searchInput:''})
    }

    handlerOnChange = event => {
      this.setState({ searchInput: event.currentTarget.value.toLowerCase() })   
    }
    render() {
        return (
     <header className="Searchbar">
      <form onSubmit={ this.handlerSubmit }
      className="SearchForm">
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.searchInput}
      onChange={this.handlerOnChange}
    />
  </form>
</header>
    )
}
}






