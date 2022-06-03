import './App.css';
import Drawer from './components/Header/DrawerComponents/Drawer';
import Navigator from './components/Header/Navigator/Navigator';
function App() {
	return (
		<div className='App'>
			<header>
				<Drawer></Drawer>
				<Navigator></Navigator>
			</header>
		</div>
	);
}

export default App;
