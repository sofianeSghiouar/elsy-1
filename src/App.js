import React from "react";
import Box from './components/Box'
import './style/global.css'

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000,
    }
  }
  onHeartChange = (e) => {
    console.log("heart", e.target.value)
    this.setState({ heart: e.target.value })

  }
  onStepsChange = (e) => {
    console.log("steps", e.target.value)
    this.setState({ steps: e.target.value })

  }
  onTempChange = (e) => {
    console.log("temp", e.target.value)
    this.setState({ temperature: e.target.value })
  }

onWaterChange= ()=>{
  
}


  render() {
    
    
      return (
        <div className="container-fluid">
          <div className="row">

            {/* Water */}


            <Box
              icon="local_drink"
              color="#3A85FF"
              value={this.state.water}
              unit="L"
            />

            {/* Steps */}
            <Box
              icon="directions_walk"
              color="black"
              value={this.state.steps}
              unit="steps"
              rangeMin={stepsMin}
              rangeMax={stepsMax}
              onChange={this.onStepsChange}
            />

            {/* Heart */}
            <Box
              icon="favorite"
              color="red"
              value={this.state.heart}
              unit="bpm"
              rangeMin={heartMin}
              rangeMax={heartMax}
              onChange={this.onHeartChange}
            />

            {/* Temperature */}
            <Box
              icon="wb_sunny"
              color="yellow"
              value={this.state.temperature}
              unit="°C"
              rangeMin={tempMin}
              rangeMax={tempMax}
              onChange={this.onTempChange}

            />

          </div>
        </div>
      )
    
  };
}

export default App;