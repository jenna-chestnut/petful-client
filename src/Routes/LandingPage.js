import React from 'react';
import { Link } from 'react-router-dom';
import catsDogsImg from '../images/dogs-and-cats.jpg';
import './LandingPage.css';

class LandingPage extends React.Component {

  render() {

      return (
      <div className='landing-page'>
        <h2>Welcome to Petful, where you can adopt a cat or dog who has been waiting for their fur-ever home!</h2>
        
        <div className='landing-page-desc'>
        <img src={catsDogsImg} alt='Cats and dogs in a row'/>
        <h3>How it works..</h3>
        <p>Potential adopters join our queue, and can watch in real time as pets are matched up with their new owners.</p>

        <p>When you join the adoption waiting list, you'll wait until you are first in line. </p>
        <p>Once it's your turn to pick, Petful will show you two animals - a cat and dog - that have been waiting the longest for their new family. It's then up to you to choose who you'll take home. (No pressure!)</p>

        <button onClick={() => this.props.history.push('/adoption')}>Click here to adopt a pet!</button>
        </div>
      </div>
      );
    }
}

export default LandingPage;