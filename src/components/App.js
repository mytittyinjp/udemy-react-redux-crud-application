import React, { Component } from "react";
import { connect } from 'react-redux'
import { reset, up, down, left, right } from '../actions'

class App extends Component{
  render(){
    const props = this.props
    return(
      <React.Fragment>
        <div>x: { props.x }</div>
        <div>y: { props.y }</div>
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