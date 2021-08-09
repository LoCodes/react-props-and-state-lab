import React from 'react'

class Pet extends React.Component {
  render() {

    const { pet, isAdopted } = this.props // this.props.pet, this.props.isAdopted / this.props.pet.isAdopted  // pet.isAdopted 
    const {name, type, gender, age, weight } = pet
    
    return (
      <div className="card">
        <div className="content">
          <a className="header" > 
            {/* PET NAME */}
            {name}
            {/* '♀' OR '♂' */}
            {gender === 'female' ? '♀' : '♂'}
          </a>
          <div className="meta">
            <span className="date"> 
           
            {type} {/* PET TYPE */}
            
            </span>
          </div>
          <div className="description">
            <p>Age: {age} {/*PET AGE*/}</p>
            <p>Weight: {weight} {/*PET WEIGHT*/}</p>
          </div>
        </div>
        <div className="extra content">

          { pet.isAdopted && 
            <button className="ui disabled button">Already adopted</button>
          }

          { !pet.isAdopted &&
            <button
              onClick={() => this.props.onAdoptPet(this.props.pet.id)}
              className="ui primary button">
              Adopt pet
            </button>
          }
          
        </div>
      </div>
    )
  }
}

export default Pet
