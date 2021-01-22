import React from 'react';
import PetfulContext from '../Context';
import './PetView.css';

class PetView extends React.Component {
  static contextType = PetfulContext;

  render() {
    let petType = this.props.petType;
    let pet = this.context.petsUpNext[petType] || {};
      return (
        <div className='pet-view'>
        <div className='name-and-img'>
        <h3>Meet {pet.name || 'pet name'}</h3>
        <p><i>{pet.description || 'pet description'}</i></p>
        <img src={pet.imageURL} alt='Pet up for adoption'/>
        </div>
        <div className='pet-desc'>
          <div>
          <p>Gender: {pet.gender || 'pet gender'}</p>
          <p>Age: {pet.age || 'pet age'}</p>
          <p>Breed: {pet.breed || 'pet breed'}</p>
          <p>Story: {pet.story || 'pet story'}</p>
          </div>
        </div>
        </div>
      );
    }
}

export default PetView;