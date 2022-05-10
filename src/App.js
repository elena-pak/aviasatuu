import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Flights from './pages/flights/Flights';
import Passengers from './pages/passengers/Passengers';
import Error from './pages/error/Error';
import CheckoutPage from './pages/checkoutpage/CheckoutPage';
// import Account from './components/account/Account';
import LanguageMenu from './components/language/LanguageMenu';
import AccountMenu from './components/account/AccountMenu';

function App() {
	// const [modalActive, setModalActive] = useState(true)
	return (
		<div className='container'>
			<Router>
			<AccountMenu />
		    <LanguageMenu />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/flights' component={Flights} />
					<Route path='/passengers' component={Passengers} />
					<Route path='/checkout' component={CheckoutPage} />
					<Route path='*' component={Error} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
