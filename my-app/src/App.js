import React from 'react';
import './App.css';
import DigitalClock from './components/DigitalLock';
import Form from './components/Form';
import { connect } from 'react-redux';

function App(props) {
  {
    console.log(props)
  }
  return (
    <div className="App">
      <div className="reducer">
        <h1>Redux Example</h1>
        <h3>I am {props.myname}</h3>
        <button onClick={() => { props.changeName("Chirag") }}>Change It</button>
        {console.log(props)}
      </div>

      <div className="reducer">
        <DigitalClock />
        <Form />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myname: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => { dispatch({ type: 'CHANGE_NAME', payload: name }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
