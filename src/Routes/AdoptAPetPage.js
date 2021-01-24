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
   fifoTimeOut = 0;

  componentDidMount() {
      this.context.clearError();
      this.updatePage();
      this.showButtons();
  
      if (this.fifoInt === 0) {
        this.fifoInt = setInterval(this.fifo, 5000)
      }
  }

  componentWillUnmount = () => {
    this.context.clearError();
    this.stopTimers();
  }

  stopTimers = () => {
    clearInterval(this.fifoInt);
    clearTimeout(this.fifoTimeOut);
  }

  showButtons = () => {
    const { people, userName } = this.context;
    let buttons = people[0] === userName 
    ? true : false;
    this.setState({ buttons })
  }

  updatePage = () => {
    PetService.get()
      .then(this.context.setPets) 
    PeopleService.get()
      .then(this.context.setPeople)
  }

  adoptRandom = () => {
    let type = Math.random() >= 0.5 ? 'cat' : 'dog';
    
    PetService.adopt(type)
    .then(this.context.setNewFam)
    .then(this.updatePage)
    .catch(this.context.setError)
  }

  fifo = () => {
    const { userName , people } = this.context;
    if (userName !== people[0]) {
        this.fifoTimeOut = setTimeout(this.adoptRandom, 2000);
    }
    else { 
      this.stopTimers();
      this.showButtons(); 
    }
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