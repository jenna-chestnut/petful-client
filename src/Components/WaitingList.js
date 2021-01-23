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
    const { newFam } = this.context;
      return (
        <div className='waiting-list'>
        <h4>WAITING LIST</h4>
        <hr/>
        <ol>
        {this.renderWaiting()}
        </ol>
        {newFam.pet && <h4>{newFam.pet.name} was adopted by {newFam.owner}!</h4>}
        </div>
      );
  }
}

export default WaitingList;