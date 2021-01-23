import React from 'react';
import PetView from '../Components/PetView';
import SignUpForm from '../Components/SignUpForm';
import WaitingList from '../Components/WaitingList';
import PetfulContext from '../Context';
import PeopleService from '../Services/people-service';
import PetService from '../Services/pet-service';
import loadingImg from '../images/loading.gif';
import './AdoptAPetPage.css';

class AdoptAPetPage extends React.Component {
  static contextType = PetfulContext;

  state = { 
      buttons: false
   }

   fifoInt = 0;

  componentDidMount() {
    const mounted = () => {
      this.context.clearError();
  
      this.showButtons();
      PeopleService.get()
      .then(this.context.setPeople)
      .catch(this.context.setError);
  
      PetService.get()
      .then(this.context.setPets)
      .catch(this.context.setError);
  
      this.fifoInt = setInterval(this.fifo, 5000)
      }

    this._isMounted = true; //this prevents memory leaks when unmounting
    this._isMounted && mounted();
  }

  componentWillUnmount() {
    this.context.clearError();
    clearInterval(this.fifoInt)
    this._isMounted = false;
  }

  showButtons = () => {
    const { people, userName } = this.context;
    let buttons = people[0] === userName 
    ? true : false;
    this.setState({ buttons })
  }

  adoptRandom = () => {
    let type = Math.random() >= 0.5 ? 'cat' : 'dog';
    PetService.adopt(type)
    .then(() => 
      PetService.get()
      .then(this.context.setPets)
      .then(() => 
      PeopleService.get()
      .then(this.context.setPeople))
      )
      .then(this.showButtons())
      .catch(this.context.setError)
  }

  fifo = () => {
    if (this.context.userName !== this.context.people[0]) {
        setTimeout(this.adoptRandom, 3000);
    }
    this.showButtons();
  }

  render() {
    const { people, petsUpNext } = this.context;

    const adoptPageBody = people.length || petsUpNext.cat 
    ? (
    <div className='adoption-center group'>
    <div className='item'>
    <SignUpForm fifo={this.fifo}/>
    <WaitingList/>
    </div>
    <div className='item-wide'>
    <PetView petType='cat' buttons={this.state.buttons}/>
    <PetView petType='dog' buttons={this.state.buttons}/>
    </div></div>
    )
    : <div className='loading'>
      <h3> Loading... </h3>
      <img src={loadingImg} alt='loading'/>
      </div>

      return (
      <div className='adopt-page'>
        <h2>Adopt a Pet</h2>    
        {adoptPageBody}
      </div>
      );
    }
}

export default AdoptAPetPage;