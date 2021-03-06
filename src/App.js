import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FlightsProvider } from './FlightsContext';

import Home from './pages/home/Home';
import Flights from './pages/flights/Flights';
import Passengers from './pages/passengers/Passengers';
import Error from './pages/error/Error';
import CheckoutPage from './pages/checkoutpage/CheckoutPage';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Navbar from './pages/navbar/Navbar';

function App() {
	return (
		<div className='container'>
			<Router>
				<FlightsProvider>
					<Navbar />
					<Routes>
						<Route path='/' element={<App />} />
						<Route index element={<Home />} />
						<Route path='flights' element={<Flights />} />
						<Route path='passengers' element={<Passengers />} />
						<Route path='/checkout' element={<CheckoutPage />} />
						<Route path='signin' element={<SignIn />} />
						<Route path='signup' element={<SignUp />} />
						<Route path='*' element={<Error />} />
					</Routes>
				</FlightsProvider>
			</Router>
		</div>
	);
}

export default App;
