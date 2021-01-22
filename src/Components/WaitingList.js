import React from 'react';
import PetfulContext from '../Context';
import './WaitingList.css';

class WaitingList extends React.Component {
  static contextType = PetfulContext;

  renderWaiting() {
    return this.context.people.map(el => {
      return <li key={el}>{el}</li>
    })
  }

  render() {
      return (
        <div className='waiting-list'>
        <ol>
        {this.renderWaiting()}
        </ol>
        </div>
      );
    }
}

export default WaitingList;