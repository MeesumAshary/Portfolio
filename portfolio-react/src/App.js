import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
	return (
		<div className='App'>
			<Navbar />

			<main>
				<Routes>
					<Route path='/' element={<Home myImage={Image} />} />
					<Route path='/about' element={<Home myImage={Image} />} />
					<Route path='/skills' element={<Skills />} />
					<Route path='/work' element={<Projects />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
