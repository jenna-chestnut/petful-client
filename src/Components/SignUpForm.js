import React from 'react';
import PetfulContext from '../Context';
import PeopleService from '../Services/people-service';
import './SignUpForm.css';

class SignUpForm extends React.Component {
  static contextType = PetfulContext;

  handleSubmit = (e) => {
    e.preventDefault();

    let { name } = e.target;
    PeopleService.post(name.value)
    .then(this.context.setUserName)
    .then(() => {
      this.context.setPeople([
        ...this.context.people,
        this.context.userName
      ])
    })
    .then(() =>  this.props.fifo())
    .catch(this.context.setError)
  }

  render() {
    const signUpForm = this.context.userName
    ? ''
    : (
      <div className='sign-up-form'>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <legend>Add your name:</legend>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name'></input>
        <button type='submit'>Put me on the list!</button>
      </form>
      </div>
    )
      return signUpForm;
    }
}

export default SignUpForm;