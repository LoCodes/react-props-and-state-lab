import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChangeFilterType = (e) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: e
      }
    })
  }

  findPets = () => {
     let url = '/api/pets'

     if (this.state.filters.type !== 'all') {
       url += `?type=${this.state.filters.type}`
     }

     fetch(url)
     .then(res => res.json())
     .then(pets => this.setState({ pets: pets })) 
  }

  // handleAdoptPet = (petId) => {
  //   this.setState({ 
  //     adoptedPets: [...this.state.adoptedPets, petId]
  //   })
  // }

  handleAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets });  // same as pets: pets
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.handleChangeFilterType} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
