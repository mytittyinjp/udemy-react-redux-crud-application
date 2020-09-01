import React, { Component } from "react";
import { connect } from 'react-redux'
import { reset, up, down, left, right } from '../actions'
import '../../node_modules/react-vis/dist/style.css'
import { XYPlot, XAxis, YAxis, MarkSeries, CircularGridLines } from 'react-vis'

class App extends Component{
  render(){
    const props = this.props
    const margin = {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10
    };
    const WIDTH = 300;
    const HEIGHT = 300;
    
    return(
      <React.Fragment>
        <XYPlot 
          margin={margin}
          xDomain={[-10, 10]}
          yDomain={[-10, 10]}
          width={WIDTH}
          height={HEIGHT}
        >
          <CircularGridLines />
          <XAxis top={(HEIGHT - margin.top) / 2} />
          <YAxis left={(WIDTH - margin.left - margin.right) / 2} />
          <MarkSeries
            strokeWidth={2}
            sizeRange={[5, 15]}
            data={[{
              x: props.x,
              y: props.y
            }]}
          />
        </XYPlot>
        <button onClick={ props.up }>UP</button>
        <button onClick={ props.down }>DOWN</button>
        <button onClick={ props.left }>LEFT</button>
        <button onClick={ props.right }>RIGHT</button>
        <button onClick={ props.reset }>RESET</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state =>({
  x: state.move.x,
  y: state.move.y
})

const mapDispatchToProps = dispatch => ({
  up: () => dispatch(up()),
  down: () => dispatch(down()),
  left: () => dispatch(left()),
  right: () => dispatch(right()),
  reset: () => dispatch(reset()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);