import React from 'react';
import PetfulContext from '../Context';
import PetService from '../Services/pet-service';
import { withRouter } from 'react-router-dom';
import './PetView.css';

class PetView extends React.Component {
  static contextType = PetfulContext;

  handleAdoption(pet) {
    PetService.adopt(pet)
    .then(this.context.setNewFam)
    .then(this.context.clearUserName)
    .then(this.props.history.push('/new-family'))
    .catch(this.context.setError)
  }

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
          <p className='story'>Story: {pet.story || 'pet story'}</p>
          </div>
          <div className='adopt-button'>{this.props.buttons && 
          <button onClick={() => this.handleAdoption(petType)}>
            Adopt me!</button>}
          </div>
        </div>
        </div>
      );
    }
}

export default withRouter(PetView);