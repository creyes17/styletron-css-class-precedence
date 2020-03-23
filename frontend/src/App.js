import React from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';
import {Client} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';

import MenuTemplate from './Menu';

const client = new Client();

const Menu = MenuTemplate(client);

function App() {
  return (
    <StyletronProvider value={client}>
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    </StyletronProvider>
  );
}

export default App;
