import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

const App = (props) => {
    return (
      <div>
        <Layout>
          <h1>Burger Builder</h1>
          <BurgerBuilder />
        </Layout>
      </div>
    );
}

export default App;
