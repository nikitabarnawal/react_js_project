import React, {Component} from 'react';
import Test from './Projects';
import SocialProfile from './SocialProfiles';
import Title  from './Title';

class App extends Component{

  state = {displayBio: false};
  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio })
  }

  render(){
    return(
      <div>
        <h1>Hello World!</h1>
        <p>My name is Nikita Barnwal.</p>
        <Title />
        <p> I am always looking for a meaningful projects. </p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in Kathmandu, and I code everyday.</p>
              <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
              <p>Besides coding, I also love music and dance!</p>
              <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read More</button>
            </div>
          )
        }
        <hr />
        <Test />
        <hr />
        <SocialProfile />
      </div>
    )
  }
}

export default App;
