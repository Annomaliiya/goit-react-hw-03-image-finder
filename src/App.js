import axios from "axios";
import { Component } from 'react';
import Button from './components/Button';
import Loader from "./components/Loader";

import './App.css';



class App extends Component {
  state = {
    isLoading: true
  }
  BASE_URL = "https://pixabay.com/api/";
  API_KEY = "24480892-2cf9ff0ac9dbac3af2a958edd";

  componentDidMount() {

  }



  render() {
    const { isLoading } = this.state;
    return (
      <div className="App">
        {isLoading && <Loader loading={this.state.isLoading} />}
        <Button title="Load more" />
      </div>
    );
  }
}

export default App;
