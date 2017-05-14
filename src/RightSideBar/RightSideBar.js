import React, { Component } from 'react';
import './RightSideBar.css';
import SocialMedia from '../SocialMedia/SocialMedia';

const welcomeQuips = ['Welcome!', 'Hello!', 'Hi!', 'Hey,', 'Sup.', 'Suh Dude.', 'Howdy Partner!', 'Yo,', 'Aloha,', 'Hola,', 
  'Que pasa homes?', 'Bonjour', 'Konnichiwa.', 'How you doin\'?', 'Hiya!', '‘Ello gov\'nor!', 'Top of the mornin’ to ya!',
  'What’s crackin’?', 'GOOOOOD MORNING VIETNAM!', '‘Sup homeslice?', 'Hello, my name is Inigo Montoya.', 'Whaddup.',
  'Greetings and salutations!', 'Doctor.'];

class RightSideBar extends Component {
  render() {
    return <div className="right-side-bar">
      <h1 className="welcome-quip">{welcomeQuips[Math.floor(Math.random() * welcomeQuips.length)]}</h1>
      <p id="intro-message">I am a passionate software engineer, who loves building amazing experiences. As most developers know, its hard to keep up with everything going on. In the words of Confucius “Real knowledge is to know the extent of one’s ignorance”. Leveraging Confucius's wisdom I'm keeping notes of the little bites of wisdom I learn from all across the web, and you can find them all here.</p>
      <SocialMedia />
    </div>;
  }
}

export default RightSideBar;
