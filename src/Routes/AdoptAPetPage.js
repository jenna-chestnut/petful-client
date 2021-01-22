import React from 'react';
import PetView from '../Components/PetView';
import SignUpForm from '../Components/SignUpForm';
import WaitingList from '../Components/WaitingList';
import PetfulContext from '../Context';
import PeopleService from '../Services/people-service';
import PetService from '../Services/pet-service';
import loadingImg from '../images/loading.gif';

class AdoptAPetPage extends React.Component {
  static contextType = PetfulContext;

  componentDidMount() {
    this.context.clearError();

    PeopleService.get()
    .then(this.context.setPeople)
    .catch(this.context.setError);

    PetService.get()
    .then(this.context.setPets)
    .catch(this.context.setError);
  }

  render() {
    const { people, petsUpNext } = this.context;

    const adoptPageBody = people.length || petsUpNext.cat 
    ? (
    <><div className='item'>
    <SignUpForm/>
    <WaitingList/>
    </div>
    <div className='item-wide'>
    <PetView petType='cat'/>
    <PetView petType='dog'/>
    </div></>
    )
    : <img src={loadingImg} className='loading-img' alt='loading'/>

      return (
      <div className='adopt-page'>
        <h2>Adopt a Pet</h2>
        
        <div className='adoption-center group'>
        {adoptPageBody}
        </div>
      </div>
      );
    }
}

export default AdoptAPetPage;