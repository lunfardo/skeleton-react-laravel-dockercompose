import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {apimessage: 'Click button to get answer'}
  }

  async getApiResponse(){
      return fetch('/api/v1/sayhello')
      .then((response) => {
        if(response.ok) {
          return response.json()
        } else {
          return 'not ok'
        }
    })
    .catch(function(error) {
      this.setState({apimessage: 'Fetch failed:' + error.message})
    });  
  }

  pleasedoit() {
    this.getApiResponse().then((result)=>{
      this.setState({apimessage: result.message})    
    })  

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
              <h3>Hello there from React, api response:</h3> 
              <h4>{this.state.apimessage}</h4>

              <button onClick={this.pleasedoit.bind(this)}>Get Answer from the server</button>
        </header>
      </div>
    );
  }
}

export default App;
