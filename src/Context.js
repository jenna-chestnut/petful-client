import React, { Component } from 'react'

const PetfulContext = React.createContext({
  userName: null,
  petsUpNext: {},
  people : [],
  newFam: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setUserName: () => {},
  setNewFam: () => {},
  clearNewFam: () => {},
  setPets: () => {},
  setPeople: () => {},
})

export default PetfulContext

export class PetfulProvider extends Component {
  state = {
    userName: null,
    petsUpNext: {},
    people : [],
    newFam: {},
    error: null
  };

  setError = async e => {
    const error = await e.message;
    return await this.setState({ error : error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setUserName = userName => {
    this.setState({ userName })
  }

  clearUserName = () => {
    this.setUserName(null)
  }

  setNewFam = newFam => {
    this.setState({ newFam })
  }

  clearNewFam = () => {
    this.setNewFam({});
  }

  setPets = petsUpNext => {
    this.setState({ petsUpNext })
  }

  setPeople = people => {
    this.setState({ people })
  }

  render() {
    const value = {
      userName: this.state.userName,
      petsUpNext: this.state.petsUpNext,
      people: this.state.people,
      newFam: this.state.newFam,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUserName: this.setUserName,
      clearUserName: this.clearUserName,
      setNewFam: this.setNewFam,
      setPets: this.setPets,
      setPeople: this.setPeople,
    }
    return (
      <PetfulContext.Provider value={value}>
        {this.props.children}
      </PetfulContext.Provider>
    )
  }
}
