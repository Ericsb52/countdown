import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import ChangeDate from './changeDate';

export default class App extends Component {

  constructor(props){
    super(props)

    this.state ={active:false}
  }
  renderItem = function() {
    if (this.state.active){
      return[
        <Clock/>,
        ChangeDate("Change Date", () =>this.setState({active:false}))

      ]
    }else{
      return Button('Generate countdown', () => this.setState({active:true}))
    }

  }.bind(this)


  render() {
    return (
      <div className="grid">
      <h1 className="grid__title">Countdown Clock</h1>
        <div className="grid__skew-dark-one-box"></div>
        <div className="grid__skew-dark-two"></div>
        <div className="grid__skew-dark-three"></div>
        <div></div>
        <div></div>
        <div className="grid__skew-light-one"></div>
        
        <Picker/> 
        
        {this.renderItem()}

        

      </div>
    );
  }
}
