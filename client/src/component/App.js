import React, {Component} from 'react';
import MainView from './main-view/MainView';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainView />
      </div>
    )
  }
}

export default App;