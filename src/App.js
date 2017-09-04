import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
//import vowelGenerator from './vowels'
//import './assets/css/fonts.css';
import Tone from 'tone';

class App extends Component {
  constructor() {
    super()
    this.state = {
      first: "FIRST LAST",
      url: "http://localhost:3030/api/vowels"
    };
    //this.url = 'http://localhost:3030/api/hello'
    this.first = this.first.bind(this);
    this.submit = this.submit.bind(this);
  }
  
first(val){
  this.setState({first: val.target.value})
}
last(val){
  this.setState({last: val.target.value})
}
submit(ev){
  let synth = new Tone.Synth().toMaster();
  // synth.triggerAttackRelease(,);
  ev.preventDefault();

  function playNote(index, arr) {
      setTimeout(() => {synth.triggerAttackRelease(arr[index], '2n')}, index * 500)
  }

axios.post('http://localhost:3030/api/vowels', {first: this.state.first, last: this.state.last})
   .then((notes) => {
    for (var i = 0; i < notes.data.firstVowels.length; i++) {
      console.log(notes.data.firstVowels[i]);
      playNote(i, notes.data.firstVowels)
    }})
  }
  render() {
    return (
      <div className="App font-effect-neon">
        <div className="App-header font-effect-neon">
          <p>NAME MOTIF</p>
        </div>
        <div className="App-intro">
        TURN YOUR NAME INTO A MUSICAL MOTIF!
        <form onSubmit={(e)=> {this.submit(e)}}>
          <section></section>
          <section></section>
          <input type="text" value={this.state.first} onChange={this.first}></input>
          <input id="btn" type="submit" value="PLAY" />
        </form>
        </div>
      </div>
    );
  }
}

export default App;
