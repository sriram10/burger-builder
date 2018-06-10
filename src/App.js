import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import { BrowserRouter } from 'react-router-dom'

const App = (props) => {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <BurgerBuilder />
          </Layout>
        </BrowserRouter>
      </div>
    );
}

export default App;


/*
1. create application using create-react-app
2. run `npm run eject` to extract all the default plugins to utilize it maximum
3. (optional) Edit webpack.config.(dev/prod).js and enable `css-modules` module option
    - module: true
    - localIdentName: '[name]__[local]__[hash:base64:5]'
4. create `components` folder inside `src` to store stateless components
5. create `containers` folder inside `src` to store statefull components
6. (optional) crate `hoc` folder inside `src` to store higher order components
7. (optional) `assets` folder inside `src` to store images & other assets
8. (later)Indivudual folder for every component
*/