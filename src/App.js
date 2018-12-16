import React, { Component } from 'react';
import './App.css';

import LocalStorageProvider from './components/context/ContextProvider';
import ListPage from './components/ListPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocalStorageProvider>
          <ListPage/>
        </LocalStorageProvider>
      </div>
    );
  }
}

export default App;
