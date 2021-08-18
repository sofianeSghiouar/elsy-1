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
      styleSteps: {
        rotate: 0,
        transition: 0,
      }
    }

  }
  onHeartChange = (e) => {
    this.setState({ heart: e.target.value });
    this.state.heart > 120 && this.onWaterChange("heart", e.target.value);

  }
  onStepsChange = (e) => {
    this.setState({ steps: e.target.value });
    this.state.steps > 10000 && this.onWaterChange("steps", e.target.value);
    this.state.steps > 20000 && this.setState({ rotate: this.state.styleSteps.rotate =`(${90}deg)` })
    this.setState({ transition: this.state.styleSteps.transition =`${0.05}s` })
    this.state.steps < 20000 && this.setState({ rotate: this.state.styleSteps.rotate = `(${0}deg)` })
    this.state.steps < 20000 && this.setState({ rotate: this.state.styleSteps.rotate = `(${0}deg)` })
    
  }
  onTempChange = (e) => {
    this.setState({ temperature: e.target.value });
    this.state.temperature > 20 && this.onWaterChange("temperature", e.target.value);
  }

  onWaterChange = (caller, callerValue) => {
    switch (caller) {
      case "heart":
        let heartUpWater = (callerValue - 20) * 0.0008 + 1.5;
        this.setState({ water: heartUpWater.toFixed(2) });
        break;

      case "steps":
        let stepsUpWater = (callerValue - 10000) * 0.0008 + 1.5;
        this.setState({ water: stepsUpWater.toFixed(1) });

        break;

      case "temperature":
        let temperatureUpWater = (callerValue - 20) * 0.02 + 1.5
        this.setState({ water: temperatureUpWater.toFixed(2) });
        break;

      default:
        console.log("error");

    }

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
            rotate={"rotate" + this.state.styleSteps.rotate}
            transition={this.state.styleSteps.transition}
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