import React, {Component} from 'react';
import Search from './components/searchbar';
import Forecast from './components/forecast';


class App extends Component {

  render() {
    return (
      <div className="bg">
      <div className="container">
        <div id="box" className="container">
        <h1 className="header">Find the <br></br><i className="material-icons md-48 ic">cloud</i> Weather</h1>
        <Search/>
        </div>
        <div id="resbx" className="resBox"></div>
        <Forecast/>
      </div>
      </div>
    );
  }
}

export default App;
