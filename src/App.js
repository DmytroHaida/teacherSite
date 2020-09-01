import React from 'react';
import './App.scss';
import Header from './component/header/header';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter >
			<Header />
		</BrowserRouter>

	);
}

export default App;
