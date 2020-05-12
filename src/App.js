import React from 'react';
import './App.css';

import MainMenu from './components/MainMenu';
import SideMenu from './components/SideMenu';
import Widgets from './components/Widgets';


function App() {
  return (
	<>
		<div className="container">
				<SideMenu />
				<MainMenu />
				<Widgets />
		</div>
	</>
  );
}

export default App;
