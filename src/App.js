import React, { Component } from 'react'
import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

import Layout from './hoc/Layout/Layout'

class App extends Component {
  
  render () {

  return (
    <div className="App">
      <Layout>
        <BurgerBuilder>

        </BurgerBuilder>
      </Layout>
    </div>
  );

}}

export default App;
