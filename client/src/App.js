import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "", dbResponse: "" };
    this.callAPI = this.callAPI.bind(this)
    this.callDB = this.callDB.bind(this)
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  callDB(){
    fetch("http://localhost:9000/testDB")
    .then(res => res.text())
    .then(res => this.setState({ dbResponse: res }))
    .catch(err => console.log("unable to connect to mongo: ", err))
  }

  componentDidMount() {
      this.callAPI();
      this.callDB();
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">{ this.state.apiResponse }</p>
          <p className="App-intro">{ this.state.dbResponse }</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }

}

export default App;
