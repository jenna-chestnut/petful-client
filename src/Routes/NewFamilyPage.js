import React from 'react';
import { Link } from 'react-router-dom';

class NewFamilyPage extends React.Component {

  render() {

      return (
      <div className='new-fam-page'>
        <h2>Pet has found their home with name!</h2>
        <Link to='adoption'>Click here to adopt a friend for them!</Link>
      </div>
      );
    }
}

export default NewFamilyPage;