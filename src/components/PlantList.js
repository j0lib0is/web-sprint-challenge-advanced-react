import React, { Component } from "react";
import axios from "axios";

// INSTRUCTIONS
// ✅ In the `PlantList` class component, fetch data from the server you now have running - the data can be fetched from `http://localhost:3333/plants.`
// ✅ Set the data to a state property called `this.state.plants.`
// ✅ The render function is already built and styled. Once the data is on the state, you will see the list of plants, and you will have the functionality to add a plant to the cart.

export default class PlantList extends Component {
  // Add state with a property called "plants" - initialize as an empty array
  state = {
    plants:[],
  }

  componentDidMount() {
    axios.get('http://localhost:3333/plants')
      .then(resp => {
        console.log(resp.data);
        this.setState({
          ...this.state,
          plants: resp.data,
        });
      })
      .catch(err => console.error(err));
  }

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <main className="plant-list">
        {this.state.plants.map((plant) => (
          <div className="plant-card" key={plant.id} data-testid="plant-card">
            <img className="plant-image" width="280" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>$ {plant.price}</p>
                <p><span role='img'>☀️</span> {plant.light}</p>
                <p><span role='img'>💦</span> {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
