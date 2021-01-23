import React from 'react';
import PetfulContext from '../Context';
import './WaitingList.css';

class WaitingList extends React.Component {
  static contextType = PetfulContext;

  renderWaiting = () => {
    const { people } = this.context;
    return people.map((el, idx) => {
      return idx === 0 
      ? <li key={idx}><b>{el}</b></li>
      : <li key={idx}>{el}</li>
    })
  }

  render = () => {
      return (
        <div className='waiting-list'>
        <h4>WAITING LIST</h4>
        <hr/>
        <ol>
        {this.renderWaiting()}
        </ol>
        </div>
      );
    }
}

export default WaitingList;